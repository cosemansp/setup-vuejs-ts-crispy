var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var Logger = require('js-logger');

console.log('LOGGER', Logger)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LOG_LEVEL: JSON.stringify(Logger.DEBUG),
})
