import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "end 0.8"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.p ref={container} className={styles.paragraph} style={{ opacity }}>
      {paragraph}
    </motion.p>
  );
}
