"use client";
export const init = () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).hljs.highlightAll();
