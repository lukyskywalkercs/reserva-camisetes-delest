/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Para optimizar el despliegue
  reactStrictMode: true, // Habilitar modo estricto de React
  swcMinify: true, // Usar SWC para minificación
  
  // Configuraciones de construcción
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },

  // Configuraciones de optimización
  experimental: {
    optimizePackageImports: ['@stripe/react-stripe-js', 'nodemailer']
  }
};

module.exports = nextConfig; 