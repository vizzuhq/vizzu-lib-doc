
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { init } = require('./init.js');
const { reference } = require('./reference/reference.js');
const { root } = require('./root/root.js');
const { tutorial } = require('./tutorial/tutorial.js');
const { examples } = require('./examples/examples.js');

function loadIndexHTML()
{
	return JSDOM.fromFile("gen/index.in.html");
}

function saveIndexHTML(dom)
{
	fs.writeFileSync('docs/test/index.html', dom.serialize());
	return Promise.resolve();
}

console.log('initializing vizzu-lib');
init().then(() => {
	console.log('generating reference');
	return Promise.all([
		reference(),
		root(),
		loadIndexHTML()
		.then(dom => tutorial(dom))
		.then(dom => examples(dom))
		.then(dom => saveIndexHTML(dom))
	]);
}).then(() => {
	console.log('done');
}).catch(err => {
	console.error(err);
});
