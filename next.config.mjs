/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
    images: {
      unoptimized: true, // This disables the image optimization API
      domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'localhost'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;