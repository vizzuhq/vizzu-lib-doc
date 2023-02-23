"""A module for generating thumbnails."""


import glob
from pathlib import Path
import shutil
import sys
from typing import List

from PIL import Image


REPO_PATH = Path(__file__).parent / ".." / ".." / ".."
MKDOCS_PATH = REPO_PATH / "tools" / "mkdocs"
VIZZU_LIB_PATH = REPO_PATH / "vizzu-lib"
VIZZU_TEST_PATH = VIZZU_LIB_PATH / "test" / "integration"
VIZZU_VIDEO_PATH = VIZZU_TEST_PATH / "modules" / "videorecorder"


sys.path.insert(0, str(MKDOCS_PATH / "modules"))

from context import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    chdir,
)
from node import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    Node,
)
from vizzu import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    Vizzu,
)


class Thumbnails:
    """A class for generating thumbnails."""

    @staticmethod
    def generate_images() -> None:
        """A method for generating thumbnail images."""

        print("Generating images...")
        with chdir(VIZZU_TEST_PATH):
            Node.node(True, "test.js", "--delete")
            params = []
            params.append("--vizzu")
            params.append(Vizzu.get_test_version())
            params.append("--images")
            params.append("ALL")
            params += glob.glob("test_cases/web_content/static/*/*")
            params += glob.glob("test_cases/web_content/presets/*")
            Node.node(True, "test.js", *params)

    @staticmethod
    def copy_images(sources: List[Path]) -> None:
        """
        A method for copying static thumbnails.

        Args:
            sources: List of source folders.
        """

        print("Copying images...")
        for src in sources:
            dst = REPO_PATH / "docs" / "examples" / src.name
            dst.mkdir(parents=True, exist_ok=True)
            for path in dst.rglob("*.png"):
                path.unlink(missing_ok=True)
            for path in src.rglob("*100.000%-1new.png"):
                with Image.open(path) as image:
                    resized = image.resize((320, 180))
                    resized.save(dst / (path.parent.name + ".png"), format="png")

    @staticmethod
    def generate_videos() -> None:
        """A method for generating thumbnail videos."""

        print("Generating videos...")
        with chdir(VIZZU_VIDEO_PATH):
            params = []
            params.append("--vizzu")
            params.append(Vizzu.get_test_version())
            params += glob.glob("../../test_cases/web_content/animated/*")
            Node.node(True, "generate.js", *params)
            Node.node(False, "resize.js")

    @staticmethod
    def copy_videos(sources: List[Path]) -> None:
        """
        A method for copying animated thumbnails.

        Args:
            sources: List of source folders.
        """

        print("Copying videos...")
        for src in sources:
            dst = REPO_PATH / "docs" / "examples" / "animated"
            dst.mkdir(parents=True, exist_ok=True)
            for path in list(dst.rglob("*.webm")) + list(dst.rglob("*.mp4")):
                path.unlink(missing_ok=True)
            for path in list(src.rglob("*.webm")) + list(src.rglob("*.mp4")):
                name_parts = path.name.split("__")
                shutil.copyfile(
                    path,
                    dst / name_parts[-1],
                )


def main() -> None:
    """
    The main method.
    It generates thumbnails.
    """

    with chdir(REPO_PATH):
        Thumbnails.generate_images()
        Thumbnails.copy_images(
            [
                VIZZU_TEST_PATH
                / "test_report"
                / "results"
                / "test_cases"
                / "web_content"
                / "presets",
                VIZZU_TEST_PATH
                / "test_report"
                / "results"
                / "test_cases"
                / "web_content"
                / "static",
            ]
        )
        Thumbnails.generate_videos()
        Thumbnails.copy_videos(
            [
                VIZZU_VIDEO_PATH
                / "resized"
                / "test_cases"
                / "web_content"
                / "animated",
            ]
        )


main()
