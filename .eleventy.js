const passthroughs = require('./utils/passthroughs.js')
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginMermaid, {
    // load mermaid from local assets directory
    mermaid_js_src: '/node_modules/mermaid.min.mjs',
    html_tag: 'div',
    extra_classes: 'graph'
  });
  
  passthroughs.forEach((passthroughPath) => {
    eleventyConfig.addPassthroughCopy(passthroughPath)
  })
//   eleventyConfig.addPassthroughCopy({'./node_modules/@fontsource/play/files/*.woff2': 'fonts'})

  return {
    dir: { input: 'src', output: 'dist' },
  }
}
