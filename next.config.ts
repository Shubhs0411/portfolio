import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  images: {
    unoptimized: true, // Important when using next export
    path: isProd ? '/portfolio/_next/image' : '/_next/image',
  },
  trailingSlash: true,
  output: 'export',
  reactStrictMode: true,
  /* config options here */
  
};

export default nextConfig;
