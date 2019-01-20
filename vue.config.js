const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_vendor.scss";
        `
      }
    }
  },
  productionSourceMap: false,
  outputDir: path.resolve(__dirname, 'docs')
}
