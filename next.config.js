const fs = require("fs");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.dropbox.com" },
      { protocol: "https", hostname: "dl.dropboxusercontent.com" },
      { protocol: "https", hostname: "zamakan.suwa.io" },
      { protocol: "https", hostname: "app.thisisislam.net" },
      { protocol: "https", hostname: "zamakanweb1.suwa.io" },
    ],
  },
};

module.exports = nextConfig;
