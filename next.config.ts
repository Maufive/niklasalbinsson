import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        // Spotify Album Art
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
      },
      {
        // Personal uploads
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
