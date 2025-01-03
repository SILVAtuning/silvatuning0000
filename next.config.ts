import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
