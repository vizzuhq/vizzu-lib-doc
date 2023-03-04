PACKAGE = vizzu-doc
OS_TYPE = linux
PYTHON_BIN = python3
BIN_PATH = bin
ifeq ($(OS), Windows_NT)
	OS_TYPE = windows
	PYTHON_BIN = python
	BIN_PATH = Scripts
endif



.PHONY: clean \
	clean-dev update-dev-req install-dev-req touch-dev \
	check format check-format check-lint check-typing \
	clean-doc doc

VIRTUAL_ENV = .venv_vizzu_doc

DEV_BUILD_FLAG = $(VIRTUAL_ENV)/DEV_BUILD_FLAG
DEV_JS_BUILD_FLAG = $(VIRTUAL_ENV)/DEV_JS_BUILD_FLAG
THUMBNAILS_JS_BUILD_FLAG = $(VIRTUAL_ENV)/THUMBNAILS_JS_BUILD_FLAG



clean: clean-dev clean-doc



# init

clean-dev:
	$(PYTHON_BIN) -c "import os, shutil;shutil.rmtree('$(VIRTUAL_ENV)') if os.path.exists('$(VIRTUAL_ENV)') else print('Nothing to be done for \'clean-dev\'')"

update-dev-req: $(DEV_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/pip-compile --upgrade dev-requirements.in

install-dev-req:
	$(VIRTUAL_ENV)/$(BIN_PATH)/pip install -r dev-requirements.txt

touch-dev:
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) tools/make/touch.py -f $(DEV_BUILD_FLAG)

dev: $(DEV_BUILD_FLAG)

$(DEV_BUILD_FLAG):
	$(PYTHON_BIN) -m venv $(VIRTUAL_ENV)
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) -m pip install --upgrade pip
	$(MAKE) -f Makefile install-dev-req
	$(MAKE) -f Makefile touch-dev

touch-dev-js:
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) tools/make/touch.py -f $(DEV_JS_BUILD_FLAG)


$(DEV_JS_BUILD_FLAG):
	npm install ./tools/javascripts/
	$(MAKE) -f Makefile touch-dev-js



# ci

check: check-format check-lint check-typing

format: $(DEV_BUILD_FLAG) $(DEV_JS_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/black tools
	$(VIRTUAL_ENV)/$(BIN_PATH)/black -l 70 docs
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) tools/mdformat/mdformat.py $(VIRTUAL_ENV)/$(BIN_PATH)/mdformat \
		--wrap 80 \
		--end-of-line keep \
		--line-length 70 \
		docs
	cd tools/javascripts && \
		npm run prettier

check-format: $(DEV_BUILD_FLAG) $(DEV_JS_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/black --check tools
	$(VIRTUAL_ENV)/$(BIN_PATH)/black --check -l 70 docs
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) tools/mdformat/mdformat.py $(VIRTUAL_ENV)/$(BIN_PATH)/mdformat \
		--check \
		--wrap 80 \
		--end-of-line keep \
		--line-length 70 \
		docs
	cd tools/javascripts && \
		npm run check-prettier

check-lint: $(DEV_BUILD_FLAG) $(DEV_JS_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/pylint tools
	cd tools/javascripts && \
		npm run check-eslint

check-typing: $(DEV_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/mypy tools



# doc

clean-doc:
ifeq ($(OS_TYPE), windows)
	if exist site ( rd /s /q site )
else
	rm -rf site
endif

touch-thumbnails-js:
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) tools/make/touch.py -f $(THUMBNAILS_JS_BUILD_FLAG)

$(THUMBNAILS_JS_BUILD_FLAG):
	cd vizzu-lib/test/integration && \
		npm install
	$(MAKE) -f Makefile touch-thumbnails-js

thumbnails: $(DEV_BUILD_FLAG) $(DEV_JS_BUILD_FLAG) $(THUMBNAILS_JS_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/$(PYTHON_BIN) ./tools/mkdocs/thumbnails/gen_thumbnails.py


doc: $(DEV_BUILD_FLAG) $(DEV_JS_BUILD_FLAG)
	$(VIRTUAL_ENV)/$(BIN_PATH)/mkdocs build -f ./tools/mkdocs/mkdocs.yml
