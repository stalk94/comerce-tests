/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,  // Включает строгий режим React
    experimental: {
      optimizeCss: true,    // Улучшает работу CSS
    },
    images: {
      domains: [],          //! хм
    }
};
  
module.exports = nextConfig;