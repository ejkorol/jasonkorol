"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AnimationScope, useAnimate } from "framer-motion";

interface CursorPosition {
  x: number;
  y: number;
}

interface ScrollPosition extends CursorPosition {}

interface CursorContextType {
  mousePosition: CursorPosition;
  setMousePosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  cursorScope: AnimationScope;
  animateCursor: any;
  scrollPosition: ScrollPosition;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [cursorScope, animateCursor] = useAnimate();
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScrollPosition = (_e: Event) => {
    const { scrollX: x, scrollY: y } = window;
    setScrollPosition({ x, y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    const { scrollX, scrollY } = window;
    requestAnimationFrame(() => {
      setMousePosition({ x: x + scrollX, y: y + scrollY });
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScrollPosition, true);
    return () => (
      window.removeEventListener("mousemove", handleMouseMove),
      window.removeEventListener("scroll", handleScrollPosition)
    );
  }, []);

  return (
    <CursorContext.Provider
      value={{
        mousePosition,
        setMousePosition,
        cursorScope,
        animateCursor,
        scrollPosition,
      }}
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
