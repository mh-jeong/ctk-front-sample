const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      alias: {
        components: path.resolve(__dirname, "/components"),
        hooks: path.resolve(__dirname, "/hooks"),
        pages: path.resolve(__dirname, "/pages"),
        mobx: path.resolve(__dirname, "/mobx"),
        styles: path.resolve(__dirname, "/styles"),
        ...config.resolve.alias,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
