"use strict";

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const Example = require('./example.js');
const exampleList = require('./example-list.js');

class Examples
{
	constructor()
	{
		this.examples = [];
		this.examples.push(...this.collect('sample_static', 'static', 'png'));
		this.examples.push(...this.collect('templates', 'animated', 'webm'));

		this.mkDirs();
		this.generateHtml();
		this.generateHtmls();
	}

	mkDirs()
	{
		fs.mkdirSync('./docs/test/content/examples/static', { recursive: true });
		fs.mkdirSync('./docs/test/content/examples/animated', { recursive: true });
	}

	generateHtml()
	{
		let indexStatic = 0;
		let indexAnimated = 0;
		this.htmlStatic = '';
		this.htmlAnimated = '';
		for (let example of this.examples)
		{
			if (example.outputFolder === 'static')
			{
				let alt = '';

				this.htmlStatic += `
					<div class="col-6 col-sm-4 col-xl-3 mb-4 thumbnail-static-card">
						<img src="${example.urlBase}.png" class="thumbnail-static action-static-example"
							data-target="${example.urlBase}.html" alt="${alt}">
					</div>
				`;
				indexStatic++;
			}
			else
			{
				let title = '';
				this.htmlAnimated += `
					<div class="col-6 col-sm-4 col-xl-3 mb-4 thumbnail-animated-card">
						<video class="thumbnail-animated action-animated-example" nocontrols="true" autoplay="true"
							muted="true" loop="true" data-target="${example.urlBase}.html"
							data-title="${title}" data-spy="scroll">
							<source src="${example.urlBase}.webm" type="video/webm">
							<source src="${example.urlBase}.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				`;
				indexAnimated++;
			}
		}
	}

	generateHtmls(examples)
	{
		for (let example of this.examples)
		{
			new Example(example);
		}
	}

	collect(inputFolder, outputFolder, extension)
	{
		let targetBase = 'content/examples/';
		let inputPath = 'vizzu-lib/test/integration/test_cases/web_content/';
		let jsFolder = inputPath + inputFolder + '/';
		let list = Object.keys(exampleList[inputFolder]);
		return list
			.filter(filename => filename.match(/.mjs$/))
			.map(jsFilename => jsFolder + jsFilename)
			.map(jsFilename => 
			{
				let basename = path.basename(jsFilename, '.mjs');
				
				let pngFilename = jsFilename
					.replace('test_cases', 'test_report/results/test_cases')
					.replace('.mjs', `/${basename}_000_100.000%-1new.png`);

				let webmFilename = jsFilename
				.replace('test_cases/web_content/templates/', 
					'modules/videorecorder/resized/web_content_templates_')
				.replace('.mjs', '.webm');

				let mp4Filename = webmFilename.replace('.webm', '.mp4');

				let urlBase = targetBase + outputFolder + '/'
					+ path.basename(jsFilename, '.mjs');

				let targetBasename = 'docs/test/' + urlBase;

				return { 
					jsFilename, 
					pngFilename,
					webmFilename,
					mp4Filename,
					outputFolder,
					extension,
					urlBase,
					targetBasename
				};
			});
	}

	getAllFiles(dirPath, arrayOfFiles) 
	{
		let files = fs.readdirSync(dirPath)

		arrayOfFiles = arrayOfFiles || [];
	  
		files.forEach(file => {
			if (fs.statSync(dirPath + "/" + file).isDirectory()) 
			{
				arrayOfFiles = this.getAllFiles(dirPath + "/" + file, arrayOfFiles)
			} else 
			{
				arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
			}
		})
  
		return arrayOfFiles;
	}
}

function examples(dom)
{
	console.log('generating examples');

	let examples = new Examples();

	let view0 = dom.window.document.getElementById('static-examples');
	view0.innerHTML = examples.htmlStatic;

	let view1 = dom.window.document.getElementById('animated-examples');
	view1.innerHTML = examples.htmlAnimated;

	return dom;
}

exports.examples = examples;