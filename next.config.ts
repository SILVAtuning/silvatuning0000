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
  env: {
    NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_API_KEY: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_API_KEY,
    NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_DOC_ID: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_DOC_ID,
    NEXT_PUBLIC_REACT_APP_MAIL_ADDRESS: process.env.NEXT_PUBLIC_REACT_APP_MAIL_ADDRESS,
    NEXT_PUBLIC_REACT_APP_X_ACCOUNT_ID: process.env.NEXT_PUBLIC_REACT_APP_X_ACCOUNT_ID,
    NEXT_PUBLIC_REACT_APP_SITE_NAME: process.env.NEXT_PUBLIC_REACT_APP_SITE_NAME,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
};

export default nextConfig;
