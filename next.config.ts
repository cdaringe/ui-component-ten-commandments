import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createMDX()(nextConfig as any);
