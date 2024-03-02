"use client";
import useMousePosition from "./utils/mousePosition";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { useState } from "react";

const Page = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quaerat rerum amet!
          Voluptatibus repellat vitae ducimus animi earum mollitia, fugiat, facere aut expedita
          assumenda autem nulla, consectetur blanditiis atque. Sapiente?
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          Lorem ipsum, <span>dolor sit amet consectetur</span> adipisicing elit. Consequuntur culpa
          iure quos illum dolorum quaerat officiis quis necessitatibus neque asperiores, excepturi
          amet nostrum expedita possimus.
        </p>
      </div>
    </main>
  );
};
export default Page;
