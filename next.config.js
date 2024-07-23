const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([withCSS], {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },
});