import type { Metadata } from "next";
import { Providers } from "@/providers/providers";
import { geist, geistMono } from "@/utils/fonts";
import "./globals.css";
import { Cursor } from "@/components/cursor";

import { Dock } from "@/components";

export const metadata: Metadata = {
  title: "Jason Korol",
  description: "Portfolio",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} dark antialiased cursor-none`}
      >
        <Providers>
          <Cursor />
          {children}
          <Dock />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
