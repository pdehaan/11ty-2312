module.exports = function (eleventyConfig) {
  // OPTION 1
  eleventyConfig.addFilter("excludeByFrontMatter", function (collection=[], frontMatterItem="") {
    if (!frontMatterItem) {
      return collection;
    }
    return collection.filter(item => !item.data[frontMatterItem]);
  });

  // OPTION 2
  eleventyConfig.addCollection("filtered_pages", function (collectionApi) {
    const pages = collectionApi.getFilteredByTag("pages");
    return [...pages].filter(page => page.data.excludeFromHomePage !== true);
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
