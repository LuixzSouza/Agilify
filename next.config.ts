/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso ajuda o Turbopack a se localizar no Windows
  experimental: {
    turbo: {
      root: '..', 
    },
  },
  // ... suas outras configs (como imagens, etc)
};

export default nextConfig;