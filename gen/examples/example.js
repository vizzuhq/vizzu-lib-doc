"use strict";

const fs = require('fs');
const jsdom = require('jsdom');
const path = require('path');
const vm = require('vm');
const { marked } = require('marked');
const hljs = require('highlight.js/lib/common');

const { JSDOM } = jsdom;

class Example
{
	constructor(example)
	{
		this.example = example;
		let jsFilename = example.jsFilename;
		let targetName = example.targetBasename;

		this.readJsContent(jsFilename);

		this.loadHTML().then(dom => {
			this.initScript(dom);
			this.setTags(dom);
			this.setDesc(dom);
			this.setCode(dom);
			this.saveHTML(dom, targetName+'.html');
		});
	}

	readJsContent(jsFilename)
	{
		let script = fs.readFileSync(jsFilename, 'utf-8');

		this.imports = '';
		let reformatted = '\n';

		script = script.replace(/export default testSteps;/,'');
		script = script.replace(/(import.*)/,(match, p1) => {
			let importLine = p1
				.replace(/from\s+(['"])(..\/)*/,"from $1https://lib.vizzuhq.com/test/integration/")
				.replace(/\.mjs/,".js");
			this.imports += importLine + '\n';
			return '';
		});

		const steps = vm.runInNewContext(script + ';testSteps');

		for (let step of steps) {
			reformatted += "\n"  
				+ step.toString()
					.replace(/chart\s*=>\s*/,'') 
					.replace(/^\s{4}/gm,'') 
				+ ";\n\n";
		}

		this.script = reformatted;
	}

	loadHTML()
	{
		return JSDOM.fromFile("gen/examples/example.in.html");
	}

	initScript(dom)
	{
		let scriptElement = dom.window.document.getElementById('initScript');
		if (this.example.targetBasename.match(/animated/)) {
			scriptElement.innerHTML += `
				window.replay = () => {
					window.location.reload();
				};
			`;
		}
	}

	setCode(dom)
	{
		let codeElement = dom.window.document.getElementById('code');
		let scriptElement = dom.window.document.getElementById('script');
		codeElement.innerHTML = '<pre>' 
			+ hljs.highlight(this.script,  {language: 'javascript'}).value
			+ '</pre>';
		scriptElement.innerHTML += `
<script type="module">
import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@~0.4.0/dist/vizzu.min.js';
${this.imports}

let chart = new Vizzu('vizzuCanvas');

${this.script}
</script>
		`;
	}

	setTags(dom)
	{
		let tagsElement = dom.window.document.getElementById('tags');
		tagsElement.innerHTML = '<b>Tags:</b> ' + this.example.tags.join(' / ');
	}

	setDesc(dom)
	{
		let descElement = dom.window.document.getElementById('desc');
		if (this.example.desc)
			descElement.innerHTML =  marked(this.example.desc);
		else
			descElement.remove();
	}

	saveHTML(dom, filename)
	{
		fs.writeFile(filename, dom.serialize(), err => { if(err) console.error(err) });
	}
}

module.exports = Example;