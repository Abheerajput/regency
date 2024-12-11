import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enables the new `app` directory
  },

  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/public/assets/:path*',
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/assets');
    return config;
  },
};

export default nextConfig;
