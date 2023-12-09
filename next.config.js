/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/',
            destination: 'https://api.example.com/:path*',
          },
        ]
      },
};

module.exports = nextConfig
