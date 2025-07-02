import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  images: {
    unoptimized: true, // Important when using next export
  },
  reactStrictMode: true,
  /* config options here */
  
};

export default nextConfig;
