module.exports = (() => {
  if (process.env.NODE_ENV !== 'development') {
    return {
      css: {
        extract: false,
      },
      configureWebpack: {
        optimization: {
          splitChunks: false,
        },
        output: {
          filename: 'app.page.plan.js',
          libraryTarget: 'amd',
        },
      },
    };
  }

  return {};
});
