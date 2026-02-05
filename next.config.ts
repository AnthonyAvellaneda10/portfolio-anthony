import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
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
};

export default withNextIntl(nextConfig);
