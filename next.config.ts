import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH || "",
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createMDX()(nextConfig as any);
