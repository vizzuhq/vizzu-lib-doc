"""A module for generating thumbnails."""


import os
from pathlib import Path
import shutil
import sys
from typing import List, Optional

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
    def generate_images(src: Path) -> None:
        """
        A method for generating image thumbnails.

        Args:
            src: Source folder.
        """

        print(f"Generating images: {src}")
        with chdir(VIZZU_TEST_PATH):
            Node.node(True, "test.js", "--delete")
            params = []
            params.append("--vizzu")
            params.append(Vizzu.get_vizzu_test_version())
            params.append("--images")
            params.append("ALL")
            params += src.rglob("*.mjs")  # type: ignore
            Node.node(True, "test.js", *params)

    @staticmethod
    def copy_images(src: Path, dst: Path, merge_subfolders: bool) -> None:
        """
        A method for copying static thumbnails.

        Args:
            src: Source folder.
            dst: destination folder.
            merge_subfolders: Merge subfolders flag.
        """

        print(f"Copying images: {src}")
        dst = REPO_PATH / "docs" / "examples" / src.name
        dst.mkdir(parents=True, exist_ok=True)
        for path in dst.rglob("*.png"):
            path.unlink(missing_ok=True)
        for path in src.rglob("*000_100.000%-1new.png"):
            test_case = path.parent
            test_name = test_case.name
            full_dst = dst
            sub = os.path.relpath(test_case.parent, src)
            if merge_subfolders and sub != ".":
                test_name += f"_{sub}"
            else:
                full_dst = full_dst / sub
                full_dst.mkdir(parents=True, exist_ok=True)
            with Image.open(path) as image:
                resized = image.resize((320, 180))
                resized.save(full_dst / (test_name + ".png"), format="png")

    @staticmethod
    def generate_videos(src: Path, gen_params: Optional[List[str]] = None) -> None:
        """
        A method for generating thumbnail videos.

        Args:
            src: Source folder.
            gen_params: Parameters for generate.js.
        """

        print(f"Generating videos: {src}")
        with chdir(VIZZU_VIDEO_PATH):
            params = []
            params.append("--vizzu")
            params.append(Vizzu.get_vizzu_test_version())
            params += src.rglob("*.mjs")  # type: ignore
            if gen_params:
                params += gen_params
            Node.node(True, "generate.js", *params)
            Node.node(False, "resize.js")

    @staticmethod
    def copy_videos(src: Path, dst: Path, merge_subfolders: bool) -> None:
        """
        A method for copying video thumbnails.

        Args:
            src: Source folder.
            dst: destination folder.
            merge_subfolders: Merge subfolders flag.
        """

        print(f"Copying videos: {src}")
        dst.mkdir(parents=True, exist_ok=True)
        for path in list(dst.rglob("*.webm")) + list(dst.rglob("*.mp4")):
            path.unlink(missing_ok=True)
        for path in list(src.rglob("*.webm")) + list(src.rglob("*.mp4")):
            test_name = path.stem
            test_suffix = path.suffix
            full_dst = dst
            sub = os.path.relpath(path.parent, src)
            if merge_subfolders and sub != ".":
                test_name += f"_{sub}"
            else:
                full_dst = full_dst / sub
                full_dst.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(
                path,
                full_dst / (test_name + test_suffix),
            )


def main() -> None:
    """
    The main method.
    It generates thumbnails.
    """

    with chdir(REPO_PATH):
        Thumbnails.generate_images(VIZZU_TEST_PATH / "test_cases/web_content/static/")
        Thumbnails.copy_images(
            VIZZU_TEST_PATH
            / "test_report"
            / "results"
            / "test_cases"
            / "web_content"
            / "static",
            REPO_PATH / "docs" / "examples" / "static",
            True,
        )

        Thumbnails.generate_images(VIZZU_TEST_PATH / "test_cases/web_content/presets/")
        Thumbnails.copy_images(
            VIZZU_TEST_PATH
            / "test_report"
            / "results"
            / "test_cases"
            / "web_content"
            / "presets",
            REPO_PATH / "docs" / "examples" / "presets",
            True,
        )

        Thumbnails.generate_videos(
            VIZZU_TEST_PATH / "test_cases/web_content/analytical_operations/"
        )
        Thumbnails.copy_videos(
            VIZZU_VIDEO_PATH
            / "resized"
            / "test_cases"
            / "web_content"
            / "analytical_operations",
            REPO_PATH / "docs" / "examples" / "analytical_operations",
            False,
        )


main()
