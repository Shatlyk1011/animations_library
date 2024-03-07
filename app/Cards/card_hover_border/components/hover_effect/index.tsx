"use client";
import { FC, useState } from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}

const HoverEffect: FC<Props> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.main}>
      <div className={`${styles.grid} ${className}`}>
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className={styles.link}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={styles.span}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <p>{item.title}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={styles.card}
      // className={cn(
      //   "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
      //   className
      // )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export default HoverEffect;
