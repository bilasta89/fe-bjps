const {
  override,
  setWebpackStats,
  useBabelRc,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('customize-cra');

module.exports = override(setWebpackStats('errors-only'), useBabelRc());
