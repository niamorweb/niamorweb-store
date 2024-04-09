/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "niamorweb-store.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
