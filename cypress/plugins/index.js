const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions
    }
  });
  
  on('dev-server:start', options =>
    startDevServer({
      options,
      webpackConfig
    })
  )

  return config
}