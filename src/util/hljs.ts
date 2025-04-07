// eslint-disable @typescript-eslint/no-explicit-any
"use client";
export const init = () =>
  (
    globalThis as any
  ).hljs.highlightAll();
