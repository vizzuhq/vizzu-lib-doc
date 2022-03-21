const fs = require('fs')

try {
  fs.unlinkSync('docs/index.html');
  fs.unlinkSync('docs/latest/index.html');
  fs.rmdirSync('docs/latest/reference', { recursive: true });
} catch(err) {
  console.error(err)
}