"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

import styles from "./styles.module.scss";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const FloatingNav = ({
  // navItems,
  className,
}: {
  // navItems: {
  //   name: string;
  //   link: string;
  // }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className={styles.main}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`${styles.wrapper} ${className}`}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link key={`link=${idx}`} href={navItem.link}>
              <span style={{ display: "none" }}>{navItem.name}</span>
            </Link>
          ))}
          <button className={styles.btn}>
            <span>Login</span>
            <span className={styles.span} />
          </button>
        </motion.div>
      </AnimatePresence>
      <div style={{ height: "200vh" }}></div>
    </div>
  );
};

export default FloatingNav;
