import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // configure page extensions to pick up markdown files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [new URL("https://image.api.playstation.com/**")],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/, // compile both regular markdown and MDX, defaults to MDX only
});

export default withMDX(nextConfig);
