"""A module for generating readme images."""

from pathlib import Path
import sys

import mkdocs_gen_files


REPO_PATH = Path(__file__).parent / ".." / ".." / ".."
MKDOCS_PATH = REPO_PATH / "tools" / "mkdocs"


sys.path.insert(0, str(MKDOCS_PATH / "modules"))

from context import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    chdir,
)


class ReadmeImages:
    """A class for generating readme images."""

    # pylint: disable=too-few-public-methods

    @staticmethod
    def generate() -> None:
        """A method for generating readme images."""
        for path in (REPO_PATH / "docs" / "readme").rglob("*"):
            with open(path, "rb") as f_image:
                image = f_image.read()
            with mkdocs_gen_files.open(f"assets/readme/{path.name}", "wb") as f_image:
                f_image.write(image)


def main() -> None:
    """
    The main method.
    It generates readme images.
    """

    with chdir(REPO_PATH):
        ReadmeImages.generate()


main()
