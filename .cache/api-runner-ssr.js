var plugins = [
  {
    plugin: require("/Users/ticothep/my-projects/portfolio-gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr"),
    options: { plugins: [] }
  },
  {
    plugin: require("/Users/ticothep/my-projects/portfolio-gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr"),
    options: {
      plugins: [],
      name: "Mate Gatsby Starter",
      short_name: "Mate Gatsby Starter",
      start_url: "/",
      background_color: "#FFFFFF",
      theme_color: "#3257fa",
      display: "minimal-ui",
      icon: "media/icon.png"
    }
  },
  {
    plugin: require("/Users/ticothep/my-projects/portfolio-gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr"),
    options: { plugins: [] }
  },
  {
    plugin: require("/Users/ticothep/my-projects/portfolio-gatsby/node_modules/gatsby-plugin-google-fonts/gatsby-ssr"),
    options: { plugins: [], fonts: ["cabin", "Open Sans"] }
  },
  {
    plugin: require("/Users/ticothep/my-projects/portfolio-gatsby/node_modules/gatsby-plugin-offline/gatsby-ssr"),
    options: { plugins: [] }
  }
];
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
