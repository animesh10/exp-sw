module.exports = {
  cache: {
    cacheId: "exp-sw",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "exp-sw",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
