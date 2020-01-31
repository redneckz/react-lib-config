const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

module.exports = async () => JSON.parse(
  await readFile(path.join(process.cwd(), 'package.json'), 'utf8'),
);
