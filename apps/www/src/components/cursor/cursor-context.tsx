"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorContextType {
  mousePosition: CursorPosition;
  setMousePosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  cursorRef: React.RefObject<HTMLDivElement>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    requestAnimationFrame(() => {
      setMousePosition({ x, y });
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider
      value={{ mousePosition, setMousePosition, cursorRef }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
