const compose = require('lodash/fp/compose');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withSourceMaps = require('@zeit/next-source-maps');
const withWinstonConfig = require('@gloojs/next-lib/config/winston-config');
const withBundleAnalyzerConfig = require('./next-config/bundle-analyzer-config');
const withRuntimeConfig = require('./next-config/runtime-config');
// next.config.js inject dependencies (keep for nectar generators)

require('dotenv').config();

module.exports = compose(
  withCSS,
  withImages,
  withSourceMaps(),
  withRuntimeConfig,
  withBundleAnalyzerConfig,
  withWinstonConfig,
  // next.config.js inject compose (keep for nectar generators)
);
