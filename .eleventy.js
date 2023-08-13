const passthroughs = require('./utils/passthroughs.js')

module.exports = function (eleventyConfig) {

  // Copy our static assets to the output folder
  
  passthroughs.forEach((passthroughPath) => {
    eleventyConfig.addPassthroughCopy(passthroughPath)
  })
//   eleventyConfig.addPassthroughCopy({'./node_modules/@fontsource/play/files/*.woff2': 'fonts'})

  return {
    dir: { input: 'src', output: 'dist' },
  }
}
