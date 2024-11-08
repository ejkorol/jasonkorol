"use client";
import { useCursor } from "./cursor-context";
import { motion } from "framer-motion";

const Cursor = () => {
  const { cursorScope, mousePosition } = useCursor();

  return (
    <motion.div
      className="absolute bg-shadow rounded-full"
      ref={cursorScope}
      style={{
        height: 30,
        width: 30,
        opacity: "80%",
        zIndex: 100,
        pointerEvents: "none",
      }}
      animate={{
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
      }}
      transition={{ ease: "easeOut", duration: 0.1618 }}
    />
  );
};

export { Cursor };
