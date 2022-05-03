const path = require("path");
const Dotenv = require("dotenv-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      alias: {
        components: path.resolve(__dirname, "/components"),
        hooks: path.resolve(__dirname, "/hooks"),
        pages: path.resolve(__dirname, "/pages"),
        store: path.resolve(__dirname, "/mobx/store"),
        styles: path.resolve(__dirname, "/styles"),
        api: path.resolve(__dirname, "/api"),
        ...config.resolve.alias,
      },
      fallback: {
        process: false,
        buffer: false,
      },
    };
    config.plugins.push(new Dotenv());
    return config;
  },
};

module.exports = nextConfig;
