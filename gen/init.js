const fs = require('fs');
const simpleGit = require('simple-git');

const repoUrl = 'git@github.com:vizzuhq/vizzu-lib.git';
const targetPath = './vizzu-lib';

function init() 
{
	if (fs.existsSync(targetPath)) {
		console.log('vizzu-lib already cloned');
		console.log('pulling vizzu-lib');
		return simpleGit(targetPath).pull();
	}
	else 
	{
		console.log('cloning vizzu-lib');
		return simpleGit().clone(repoUrl, targetPath);
	}
}

exports.init = init;
