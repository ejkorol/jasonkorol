import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["geist"],
      serif: ["geistMono"],
      display: ["geist"],
      body: ["geist"],
      mono: ["geistMono"],
    },
    extend: {
      fontFamily: {
        geist: ["var(--font-geist)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      colors: {
        light: "#fafafa",
        grey: "#757575",
        lightGrey: "#3c3c3c",
        dark: "#212121",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
