/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.placeholder.com",
      },
    ],
  },
};

module.exports = nextConfig;
