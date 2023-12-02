const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  return {
    dir: { input: 'src', output: '_site' }
  };
};
