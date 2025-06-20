/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
      unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'example.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;