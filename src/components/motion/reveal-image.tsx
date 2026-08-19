"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealImageProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealImage({
  children,
  className,
  delay = 0,
}: RevealImageProps) {
  return (
    <motion.div
      initial={{
        clipPath: "inset(0 0 100% 0)",
      }}
      whileInView={{
        clipPath: "inset(0 0 0% 0)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
