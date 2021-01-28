/* eslint-disable */

const withAntdLess = require('next-plugin-antd-less');
const generateTheme = require('next-dynamic-antd-theme/plugin');
const path = require('path');

const withAntdTheme = generateTheme({
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/styles'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  outputFilePath: path.join(__dirname, './.next/static/color.less'),
  customThemes: {},
});


module.exports = withAntdTheme(withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
    modules: {
      mode: 'local',
    },
  },

  // Other NextConfig Here...
  webpack(config) {
    return config;
  },
}));
