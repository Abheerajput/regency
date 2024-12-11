import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable app directory support
  },
  /* config options here */
};

export default nextConfig;

// import path from 'path';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true, // Enables the new `app` directory
//   },

//   async rewrites() {
//     return [
//       {
//         source: '/assets/:path*',
//         destination: '/public/assets/:path*',
//       },
//     ];
//   },

//   webpack: (config) => {
//     // Adding alias for public assets
//     config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/assets');
//     return config;
//   },
// };

// export default nextConfig;
