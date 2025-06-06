import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://26.47.66.165:3000"
  ],
  devIndicators: false
};

export default nextConfig;
