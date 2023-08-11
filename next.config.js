/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
  },
};

module.exports = nextConfig;
