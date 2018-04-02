var path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
  config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
  return config;
}
