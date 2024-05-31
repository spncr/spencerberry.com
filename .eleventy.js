module.exports = config => {

  config.addWatchTarget("./src/sass");
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./src/img");
  
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site'
    }
  }
}