import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const repoName = "prime-web-app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  compiler: {
    reactRemoveProperties: true,
  },
};

export default nextConfig;
