// next.config.ts
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configuración añadida para desactivar el Modo Estricto de React.
  // Esto evita la doble inicialización de Leaflet/MapContainer en desarrollo.
  reactStrictMode: false, 

  experimental: {
    turbo: {
      // Especificar el directorio raíz para evitar el warning
      root: process.cwd(),
    },
  },
};

export default nextConfig;