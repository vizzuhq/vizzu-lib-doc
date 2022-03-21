const fs = require('fs')

try {
  fs.unlinkSync('docs/index.html');
  fs.unlinkSync('docs/test/index.html');
  fs.rmdirSync('docs/test/reference', { recursive: true });
} catch(err) {
  console.error(err)
}