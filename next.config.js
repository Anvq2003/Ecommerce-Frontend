/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grocery-store-s1.s3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
