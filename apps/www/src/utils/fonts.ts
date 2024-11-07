import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const geist = localFont({
  src: "../../public/fonts/geist-variable.ttf",
  display: "swap",
  variable: "--font-geist",
});

export const geistMono = localFont({
  src: "../../public/fonts/geist-variable-mono.ttf",
  display: "swap",
  variable: "--font-geist-mono",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
