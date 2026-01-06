import type { NextConfig } from "next";
import createMDXPlugin from "@next/mdx";

const withMDX = createMDXPlugin({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // Add MDX support
};

export default withMDX(nextConfig);
