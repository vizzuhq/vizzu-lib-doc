"""A module for deploying site."""

from pathlib import Path
from subprocess import Popen
import sys


REPO_PATH = Path(__file__).parent / ".." / ".."
MKDOCS_PATH = REPO_PATH / "tools" / "mkdocs"


sys.path.insert(0, str(MKDOCS_PATH / "modules"))

from context import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    chdir,
)
from vizzu import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    Vizzu,
)


class Deploy:
    """A class for deploying site."""

    # pylint: disable=too-few-public-methods

    @staticmethod
    def mike() -> None:
        """A method for deploying site."""

        version = Vizzu.get_version()

        with Popen(
            [
                "mike",
                "deploy",
                "-u",
                version,
                "latest",
                "-F",
                "tools/mkdocs/mkdocs.yml",
            ],
        ) as process:
            process.communicate()

        if process.returncode:
            raise RuntimeError("failed to run mike")


def main() -> None:
    """
    The main method.
    It set deploys site.
    """

    with chdir(REPO_PATH):
        Deploy.mike()


main()
