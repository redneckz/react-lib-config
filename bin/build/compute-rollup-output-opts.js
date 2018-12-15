const path = require('path');

const ENV = process.env.NODE_ENV;

const KNOWN_GLOBALS = {
  react: 'React',
  rxjs: 'rxjs',
  'rxjs/operators': 'rxjs.operators',
};

module.exports = ({ packageName }) => Object.assign(
  {
    format: getModuleFormat(ENV),
    file: getOutputFilePath(ENV),
    sourcemap: true,
  },
  (ENV === 'development' || ENV === 'production') && {
    name: computeLibName(packageName),
    globals: KNOWN_GLOBALS,
  },
);

function getModuleFormat(env) {
  return {
    cjs: 'cjs',
    es: 'es',
    development: 'umd',
    production: 'umd',
  }[env];
}

function getOutputFilePath(env) {
  const dist = {
    cjs: 'lib',
    es: 'es',
    development: 'dist',
    production: 'dist',
  }[env];
  const ext = env === 'production' ? '.min.js' : '.js';
  return path.join(process.cwd(), dist, `index${ext}`);
}

function computeLibName(packageName) {
  const nameParts = packageName.split('/');
  const lastPart = nameParts.pop();
  return pascalCase(lastPart);
}

function pascalCase(str) {
  return str
    .replace(/\w+/g, word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .replace(/[^\w]/g, '');
}
