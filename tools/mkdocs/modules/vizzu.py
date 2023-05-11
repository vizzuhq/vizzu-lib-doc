"""A module for working with Vizzu."""

from pathlib import Path
import re


REPO_PATH = Path(__file__).parent / ".." / ".." / ".."
MKDOCS_PATH = REPO_PATH / "tools" / "mkdocs"
VIZZU_LIB_PATH = REPO_PATH / "vizzu-lib"


VIZZU_BACKEND_URL = ""
VIZZU_STYLEREF_BACKEND_URL = ""
VIZZU_SHOWCASE_BACKEND_URL = ""
GITHUB_SHOWCASE_BACKEND_URL = ""
SITE_SHOWCASE_BACKEND_URL = ""

VIZZU_VERSION = ""
VIZZU_TEST_VERSION = ""

VIZZU_DOC_URL = "https://github.com/vizzuhq/vizzu-lib-doc"
VIZZU_SITE_URL = "https://lib.vizzuhq.com"
VIZZU_CDN_URL = "https://cdn.jsdelivr.net/npm/vizzu"


class Vizzu:
    """A class for working with Vizzu."""

    _vizzu_version = ""

    @staticmethod
    def get_vizzu_backend_url() -> str:
        """
        A static method for returning backend vizzu url.

        Returns:
            Backend vizzu url.
        """

        if VIZZU_BACKEND_URL:
            return VIZZU_BACKEND_URL
        version = Vizzu.get_vizzu_version()
        return f"{VIZZU_CDN_URL}@{version}/dist/vizzu.min.js"

    @staticmethod
    def get_vizzu_styleref_backend_url() -> str:
        """
        A static method for returning backend vizzu style reference url.

        Returns:
            Backend vizzu style reference url.
        """

        if VIZZU_STYLEREF_BACKEND_URL:
            return VIZZU_STYLEREF_BACKEND_URL
        version = Vizzu.get_vizzu_version()
        return f"{VIZZU_CDN_URL}@{version}/dist/vizzu.min.js"

    @staticmethod
    def get_vizzu_full_version() -> list:
        """
        A static method for returning vizzu major.minor.patch version.

        Returns:
            Vizzu major.minor.patch version.
        """

        with open(
            VIZZU_LIB_PATH / "src" / "chart" / "main" / "version.cpp",
            "r",
            encoding="utf8",
        ) as f_version:
            content = f_version.read()
            version = re.search(r"version\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)", content)
            return [
                version.group(1),  # type: ignore
                version.group(2),  # type: ignore
                version.group(3),  # type: ignore
            ]

    @staticmethod
    def get_vizzu_version() -> str:
        """
        A static method for returning vizzu major.minor version.

        Returns:
            Vizzu major.minor version.
        """

        if VIZZU_VERSION:
            return VIZZU_VERSION
        if not Vizzu._vizzu_version:
            version_parts = Vizzu.get_vizzu_full_version()
            Vizzu._vizzu_version = f"{version_parts[0]}.{version_parts[1]}"
        return Vizzu._vizzu_version

    @staticmethod
    def get_vizzu_test_version() -> str:
        """
        A static method for returning vizzu test version.

        Returns:
            Vizzu test version.
        """

        if VIZZU_TEST_VERSION:
            return VIZZU_TEST_VERSION
        version_parts = Vizzu.get_vizzu_full_version()
        return f"{version_parts[0]}.{version_parts[1]}.{version_parts[2]}"

    @staticmethod
    def set_version(content: str, restore: bool = False) -> str:
        """
        A static method for setting vizzu version in content.

        Args:
            content: Content to be modified.
            restore: A flag to restore the content.

        Returns:
            Modified content.
        """

        version = Vizzu.get_vizzu_version()
        if not restore:
            content = content.replace(
                f"{VIZZU_CDN_URL}@latest/",
                f"{VIZZU_CDN_URL}@{version}/",
            )
            content = content.replace(
                f"{VIZZU_SITE_URL}/latest/", f"{VIZZU_SITE_URL}/{version}/"
            )
        else:
            content = content.replace(
                f"{VIZZU_CDN_URL}@{version}/",
                f"{VIZZU_CDN_URL}@latest/",
            )
            content = content.replace(
                f"{VIZZU_SITE_URL}/{version}/",
                f"{VIZZU_SITE_URL}/latest/",
            )
        return content

    @staticmethod
    def set_version_showcase_js(content: str) -> str:
        """
        A static method for setting versions in showcase.

        Args:
            content: Content to be modified.

        Returns:
            Modified content.
        """

        version = Vizzu.get_vizzu_version()
        vizzu_url = f"{VIZZU_CDN_URL}@{version}/dist/vizzu.min.js"
        if VIZZU_SHOWCASE_BACKEND_URL:
            vizzu_url = VIZZU_SHOWCASE_BACKEND_URL
        content = content.replace(
            f"{VIZZU_CDN_URL}@latest/dist/vizzu.min.js", vizzu_url
        )
        return content

    @staticmethod
    def set_version_showcase_html(content: str) -> str:
        """
        A static method for setting versions in showcase.

        Args:
            content: Content to be modified.

        Returns:
            Modified content.
        """

        version = Vizzu.get_vizzu_version()
        github_url = f"{VIZZU_DOC_URL}/tree/gh-pages"
        new_github_url = github_url
        if GITHUB_SHOWCASE_BACKEND_URL:
            new_github_url = GITHUB_SHOWCASE_BACKEND_URL
        content = content.replace(
            f"{github_url}/latest/",
            f"{new_github_url}/{version}/",
        )
        site_url = VIZZU_SITE_URL
        if SITE_SHOWCASE_BACKEND_URL:
            site_url = SITE_SHOWCASE_BACKEND_URL
        content = content.replace(f"{VIZZU_SITE_URL}/latest/", f"{site_url}/{version}/")
        return content
