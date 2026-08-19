"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

type RevealTextProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function RevealText({
  children,
  delay = 0,
  className = "",
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{
          y: "100%",
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                y: "0%",
                opacity: 1,
              }
            : {
                y: "100%",
                opacity: 0,
              }
        }
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
