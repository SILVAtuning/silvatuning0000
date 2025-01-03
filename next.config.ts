import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = process.env.NODE_ENV;
console.log({ env })

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    implementation: 'sass-embedded',
  },
  basePath: process.env.NODE_ENV === "development" ? "" : "/silvatuning0000"
};

export default nextConfig;
