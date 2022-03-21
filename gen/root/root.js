"use strict";

const fs = require('fs');
const jsdom = require('jsdom');
const { marked } = require('marked');
const { DefaultSerializer } = require('v8');
const { JSDOM } = jsdom;

function loadHTML()
{
	return JSDOM.fromFile("gen/root/index.in.html");
}

function generate(dom)
{
	const readmeFile = 'vizzu-lib/README.md';

	marked.setOptions({
		highlight: function(code, lang) {
			const hljs = require('highlight.js');
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		},
	});

	let defaultRender = new marked.Renderer();

	marked.use({
		renderer: {
			link: function (href, title, string) {
				if (!href.startsWith('http') && !href.startsWith('mailto'))
					href = 'https://github.com/vizzuhq/vizzu-lib/blob/main/'+href;
				return defaultRender.link(href, title, string);
			}
		}
	});

	let markedContent = fs.readFileSync(readmeFile, 'utf-8');
	let html = marked(markedContent);

	let content = dom.window.document.getElementById('content');
	content.innerHTML = html;
}

function saveHTML(dom)
{
	fs.writeFile('docs/index.html', dom.serialize(), console.error);
}

function root()
{
	console.log('generation docs/index.html');

	return loadHTML().then(dom => {
		generate(dom);
		saveHTML(dom);
		return Promise.resolve();
	});
}

exports.root = root;
