/* eslint no-console: off */
const chalk = require('chalk');
const rollup = require('rollup');
const readPackageJSON = require('../read-package-json');
const computeOutputOpts = require('./compute-rollup-output-opts');
const computeInputOpts = require('./compute-rollup-input-opts');

module.exports = async function build() {
  console.log(chalk.blue('Build started...'));
  const packageJSON = await readPackageJSON();
  console.log(`Package ${chalk.green(packageJSON.name)}`);
  const inputOptions = computeInputOpts({ peers: packageJSON.peerDependencies });
  const bundle = await rollup.rollup(inputOptions);
  console.log(`Files ${chalk.green(bundle.watchFiles)}`);
  const outputOptions = computeOutputOpts({ packageName: packageJSON.name });
  console.log(`${chalk.blue('Generating')} ${chalk.green(outputOptions.format.toUpperCase())}`);
  await bundle.generate(outputOptions);
  console.log(`${chalk.blue('Writing to')} ${chalk.green(outputOptions.file)}`);
  await bundle.write(outputOptions);
  console.log(chalk.blue('Build finished'));
};
