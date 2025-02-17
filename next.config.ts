import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ["i.ibb.co", "acortar.link"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'acortar.link',
        search: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
