const path = require('path');

const stories = [
  '../../templates/**/*/stories/*.jsx',
  '../../page-structure/**/*/stories/*.jsx',
  '../../layout/**/*/stories/*.jsx',
  '../../components/**/*/stories/*.jsx',
  '../../utilities/**/*/stories/*.jsx',
];

const addons = [
  '@ecl/storybook-addon-code/register',
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
  '@storybook/addon-a11y',
  '@storybook/addon-cssresources',
];

const webpackFinal = (defaultConfig, mode) => {
  // Babel loader: include "src"
  defaultConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../../../..')
  );

  defaultConfig.module.rules[0].exclude = /node_modules/;

  // Change media dist folder
  defaultConfig.module.rules[5].query.name =
    'dist/images/[name].[hash:8].[ext]';

  if (mode === 'PRODUCTION') {
    const processPluginIndex = defaultConfig.plugins.findIndex(
      (plugin) => plugin instanceof webpack.ProgressPlugin
    );
    if (processPluginIndex > 0) {
      defaultConfig.plugins.splice(processPluginIndex, 1);
    }
  }

  return defaultConfig;
};

module.exports = { stories, addons, webpackFinal };
