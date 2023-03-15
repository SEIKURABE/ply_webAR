/** @type {import('next').NextConfig} */

const SUB_DIRECTORY = "/ply_webAR";
const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
};

module.exports = nextConfig;
