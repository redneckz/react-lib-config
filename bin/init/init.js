/* eslint no-console: off */
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const readPackageJSON = require('../read-package-json');

module.exports = async function init() {
  console.log(chalk.blue('Init started...'));
  const packageJSON = await readPackageJSON();
  console.log(`Package ${chalk.green(packageJSON.name)}`);
  try {
    await fs.copy(path.join(__dirname, 'scaffolding'), process.cwd());
    console.log(chalk.blue('Init finished'));
  } catch (err) {
    console.error('Can not copy scaffolding');
  }
};
