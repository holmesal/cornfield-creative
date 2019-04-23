const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = {
  target: 'serverless',
  ...withSass({
    cssModules: true,
    ...withTypescript({
      webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty',
        };

        return config;
      },
    }),
  }),
};
