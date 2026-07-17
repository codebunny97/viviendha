"use client";

import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";

const phrases = [
  "Dream.",
  "Family.",
  "Future.",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-57.5">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5,
            ease: easeInOut
          }}
          className="font-semibold"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}