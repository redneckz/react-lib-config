const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const { uglify } = require('rollup-plugin-uglify');

const ENV = process.env.NODE_ENV;

const KNOWN_EXTERNALS = [
  'react',
  'rxjs',
  'rxjs/operators',
];

module.exports = ({ peers }) => ({
  input: 'src/index.js',
  external: KNOWN_EXTERNALS.concat(Object.keys(peers || {})),
  plugins: [
    babel({
      babelrc: true,
      exclude: ['node_modules/**', '*.spec.js'],
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    ENV === 'production' && uglify({
      keep_fnames: true,
      warnings: false,
      compress: {
        pure_getters: true,
      },
    }),
  ],
});
