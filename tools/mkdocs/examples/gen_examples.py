"""A module for generating the example gallery."""

import os
from pathlib import Path
import re
import sys
from typing import List, Dict, Optional

import mkdocs_gen_files


REPO_PATH = Path(__file__).parent / ".." / ".." / ".."
MKDOCS_PATH = REPO_PATH / "tools" / "mkdocs"
GEN_PATH = MKDOCS_PATH / "examples"
VIZZU_LIB_PATH = REPO_PATH / "vizzu-lib"
WEB_CONTENT_PATH = (
    VIZZU_LIB_PATH / "test" / "integration" / "test_cases" / "web_content"
)
TEST_DATA_PATH = VIZZU_LIB_PATH / "test" / "integration" / "test_data"
STATIC_EXAMPLES_PATH = WEB_CONTENT_PATH / "static"
ANIMATED_EXAMPLES_PATH = WEB_CONTENT_PATH / "animated"
OPERATION_EXAMPLES_PATH = WEB_CONTENT_PATH / "analytical_operations"
PRESET_EXAMPLES_PATH = WEB_CONTENT_PATH / "presets"
SHOWCASES_PATH = REPO_PATH / "docs" / "showcases"
JS_ASSETS_PATH = "assets/javascripts"


sys.path.insert(0, str(MKDOCS_PATH / "modules"))

from context import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    chdir,
)
from node import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    Node,
)
from md import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    Md,
)
from vizzu import (  # pylint: disable=import-error, wrong-import-position, wrong-import-order
    Vizzu,
)


class GenExamples:
    """A class for generating examples."""

    # pylint: disable=too-many-instance-attributes

    datafiles: Dict[str, bool] = {}

    datafile_re = re.compile(r"test_data\/(\w*).mjs")
    dataname_re = re.compile(r"import\s*\{\s*(.*)\s*}")
    title_re = re.compile(r'title\:\s"(.*)"')

    def __init__(self, name: str, src: Path, dst: str) -> None:
        self._name = name

        self._src = src
        self._dst = dst

        self._generated: List[str] = []
        self._indices: List[str] = []

        self._merge_subfolders = False
        self._video_thumbnails = False
        self._filename_title = False
        self._blocked: List[str] = []

    @property
    def merge_subfolders(self) -> bool:
        """
        A property for merging subfolders.

        Returns:
            `merge_subfolders` value.
        """
        return self._merge_subfolders

    @merge_subfolders.setter
    def merge_subfolders(self, value: bool) -> None:
        self._merge_subfolders = value

    @property
    def video_thumbnails(self) -> bool:
        """
        A property for using video thumbnails.

        Returns:
            `video_thumbnails` value.
        """
        return self._video_thumbnails

    @video_thumbnails.setter
    def video_thumbnails(self, value: bool) -> None:
        self._video_thumbnails = value

    @property
    def filename_title(self) -> bool:
        """
        A property for using title from file names.

        Returns:
            `filename_title` value.
        """
        return self._filename_title

    @filename_title.setter
    def filename_title(self, value: bool) -> None:
        self._filename_title = value

    @property
    def blocked(self) -> List[str]:
        """
        A method for setting blocked examples.

        Returns:
            Blocked examples.
        """

        return self._blocked

    @blocked.setter
    def blocked(self, items: List[str]) -> None:
        self._blocked = items

    @staticmethod
    def _get_content(item: Path) -> str:
        with open(item, "r", encoding="utf8") as fh_item:
            return fh_item.read()

    def _get_title(self, item: Path, content: str) -> str:
        if self._filename_title:
            title_parts = str(item.stem).split("_")
            for index, value in enumerate(title_parts):
                try:
                    tmp = int(value)
                    title_parts[index] = str(tmp)
                except ValueError:
                    continue
            title = " ".join(title_parts[1:])
            return title

        titles = re.findall(GenExamples.title_re, content)
        if not titles:
            raise ValueError(f"failed to find title {item}")
        title = titles[0]
        if len(titles) > 1:
            title = " to ".join([title, titles[-1]])
            title = title.replace("Chart", "")
        return title

    def _get_datafile(self, item: Path, content: str) -> str:
        datafiles = re.findall(GenExamples.datafile_re, content)
        if not datafiles or len(datafiles) > 1:
            raise ValueError(f"failed to find datafile {item}")
        datafile = "".join(datafiles)
        return datafile

    def _get_dataname(self, item: Path, content: str) -> str:
        datanames = re.findall(GenExamples.dataname_re, content)
        if not datanames or len(datanames) > 1:
            raise ValueError(f"failed to find dataname {item}")
        dataname = "".join(datanames)
        dataname = dataname.strip()
        return dataname

    def _create_index(
        self, parent_path: Optional[Path] = None, assets_path: Optional[str] = None
    ) -> str:
        index = self._dst
        depth = 2

        if parent_path:
            dst = os.path.relpath(parent_path, self._src)
            index = "/".join([self._dst, dst]) if dst != "." else self._dst
            depth += dst.count("/")
            if dst != ".":
                depth += 1

        if not assets_path:
            assets_path = "/".join([".."] * depth)

        if index not in self._indices:
            with mkdocs_gen_files.open(f"{index}/index.md", "a") as fh_index:
                meta = """---\nhide:\n  - toc\n---"""
                fh_index.write(f"{meta}\n\n")
                fh_index.write(f"# {self._name}\n")
                fh_index.write(
                    f'<script src="{assets_path + "/" + JS_ASSETS_PATH}/thumbs.js"></script>\n'
                )
            self._indices.append(index)

        return index

    def _add_index_item(self, index: str, item: Path, title: str) -> None:
        if self._video_thumbnails:
            self._add_video(index, item, title)
        else:
            self._add_image(index, item, title)

    def _add_image(self, index: str, item: Path, title: str) -> None:
        with mkdocs_gen_files.open(f"{index}/index.md", "a") as fh_index:
            fh_index.write(
                "["
                + f"![{title}]"
                + f"(./{item.stem}.png)"
                + "{ class='image-gallery' }"
                + "]"
                + f"(./{item.stem}.md)\n"
            )

    def _add_video(self, index: str, item: Path, title: str) -> None:
        with mkdocs_gen_files.open(f"{index}/index.md", "a") as fh_index:
            fh_index.write(
                f"<a href='./{item.stem}/' title='{title}'>"
                + "<video nocontrols autoplay muted loop class='image-gallery'"
                + f"src='./{item.stem}.mp4'"
                + " type='video/mp4'></video>"
                + "</a>\n"
            )

    @staticmethod
    def _generate_example_data(datafile: str) -> None:
        if datafile not in GenExamples.datafiles:
            GenExamples.datafiles[datafile] = True

            datacontent = GenExamples._get_content(TEST_DATA_PATH / f"{datafile}.mjs")
            with mkdocs_gen_files.open(f"assets/data/{datafile}.js", "w") as fh_data:
                fh_data.write(datacontent)

            content = Node.node(
                True,
                GEN_PATH / "mjs2csv.mjs",
                f"{TEST_DATA_PATH}/{datafile}.mjs",
            )
            with mkdocs_gen_files.open(f"assets/data/{datafile}.csv", "w") as f_example:
                f_example.write(content)

    def _generate_example_js(
        self, item: Path, dst: str, datafile: str, dataname: str
    ) -> None:
        depth = 3
        depth += dst.count("/")
        if dst != ".":
            depth += 1
        params = [str(item), "/".join([".."] * depth), datafile, dataname]
        content = Node.node(True, GEN_PATH / "mjs2js.mjs", *params)
        with mkdocs_gen_files.open(
            f"{self._dst}/{dst}/{item.stem}/{item.stem}.js", "w"
        ) as f_example:
            f_example.write(content)

    def _generate_example_md(  # pylint: disable=too-many-arguments
        self,
        item: Path,
        dst: str,
        datafile: str,
        dataname: str,
        title: str,
    ) -> None:
        params = [str(item), str(TEST_DATA_PATH), datafile, dataname, title]
        content = Node.node(True, GEN_PATH / "mjs2md.mjs", *params)
        content = Vizzu.set_version(content)
        content = Md.format(content)
        with mkdocs_gen_files.open(
            f"{self._dst}/{dst}/{item.stem}.md", "w"
        ) as f_example:
            f_example.write(content)

    def _generate_example(
        self, item: Path, datafile: str, dataname: str, title: str
    ) -> None:
        dst = "."
        if not self._merge_subfolders:
            dst = os.path.relpath(item.parent, self._src)
        self._generate_example_md(item, dst, datafile, dataname, title)
        self._generate_example_js(item, dst, datafile, dataname)
        GenExamples._generate_example_data(datafile)

    def generate(self) -> None:
        """A method for generating examples."""

        src = self._src
        index = self._create_index()
        items = list(src.rglob("*.mjs"))
        items.sort(key=lambda f: f.stem)
        for item in items:
            if item not in self._blocked:
                if self._merge_subfolders:
                    if item.stem in self._generated:
                        raise ValueError(f"example already exists {item.stem}")
                    self._generated.append(item.stem)
                else:
                    index = self._create_index(item.parent)
                content = GenExamples._get_content(item)
                datafile = self._get_datafile(item, content)
                dataname = self._get_dataname(item, content)
                title = self._get_title(item, content)
                self._add_index_item(index, item, title)
                self._generate_example(item, datafile, dataname, title)


class GenShowcases(GenExamples):
    """A class for generating showcases index page."""

    def generate(self) -> None:
        """A method for overwriting GenExamples.generate method."""

        self._create_index(assets_path="..")
        src = self._src
        items = list(src.rglob("*.js")) + list(src.rglob("main.html"))
        for item in items:
            content = GenExamples._get_content(item)
            if item.suffix == ".js":
                content = Vizzu.set_js_showcase_url(content)
            elif item.suffix == ".html":
                content = Vizzu.set_html_showcase_url(content)
            with mkdocs_gen_files.open(
                self._dst + "/" + os.path.relpath(item, SHOWCASES_PATH), "w"
            ) as fh_js:
                fh_js.write(content)

        items = list(src.rglob("*.md"))
        items.sort(key=lambda f: f.stem)
        for item in items:
            with mkdocs_gen_files.open(f"{self._dst}/index.md", "a") as fh_index:
                fh_index.write(
                    f"<a href='./{item.stem}/' title=''>"
                    + "<video nocontrols autoplay muted loop class='image-gallery'"
                    + f"src='./{item.stem}.mp4'"
                    + " type='video/mp4'></video>"
                    + "</a>\n"
                )


def main() -> None:
    """
    The main method.
    It generates the example gallery.
    """

    with chdir(REPO_PATH):
        presets = GenExamples(
            "Preset charts",
            PRESET_EXAMPLES_PATH,
            "examples/presets",
        )
        presets.merge_subfolders = True
        presets.generate()

        static = GenExamples(
            "Static charts",
            STATIC_EXAMPLES_PATH,
            "examples/static",
        )
        static.merge_subfolders = True
        static.generate()

        animated = GenExamples(
            "Animated charts",
            ANIMATED_EXAMPLES_PATH,
            "examples/animated",
        )
        animated.merge_subfolders = True
        animated.video_thumbnails = True
        animated.generate()

        operations = GenExamples(
            "Analytical Operations",
            OPERATION_EXAMPLES_PATH,
            "examples/analytical_operations",
        )
        operations.video_thumbnails = True
        operations.filename_title = True
        operations.generate()

        real = GenShowcases(
            "Showcases",
            SHOWCASES_PATH,
            "showcases",
        )
        real.video_thumbnails = True
        real.generate()


main()
