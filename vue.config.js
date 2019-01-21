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
  publicPath: '/weather/', // for gitHub pages
  productionSourceMap: false
}
