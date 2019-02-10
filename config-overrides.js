const { override, disableEsLint, addBabelPlugins } = require('customize-cra')

module.exports = override(disableEsLint(), ...addBabelPlugins('styled-components'))
