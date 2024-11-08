"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CursorProvider } from "@/components/cursor";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CursorProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </CursorProvider>
    </>
  );
};
