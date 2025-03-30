import type { Metadata, Viewport } from "next";
import { Cherry_Swash } from "next/font/google";
import "./globals.css";
import "./uno.css";
import Script from "next/script";
import { init } from "@/util/hljs";

const cherrySwash = Cherry_Swash({
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Web Component Design Ten Commandments",
  description: "Heed them. Flourish.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="border-blue-6 md:border-l-12 border-l-4 border-l-solid"
    >
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
        onLoad={init}
      />
      <body
        className={[
          cherrySwash.className,
          "max-w-[1000px] px-4 mx-auto",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
