const embedSpotify = require("eleventy-plugin-embed-spotify");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(embedSpotify);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

