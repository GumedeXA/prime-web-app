import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Enable static HTML export
  output: "export",

  // GitHub Pages requires a base path with your repo name in production
  basePath: isProd ? "/prime-web-app" : "",      // <-- replace REPO_NAME
  assetPrefix: isProd ? "/prime-web-app/" : "",  // ensures assets load correctly

  // Optional: enable strict mode if you want
  reactStrictMode: true,
};

export default nextConfig;
