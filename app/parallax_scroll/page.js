"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import Lenis from "@studio-freight/lenis";

import { useScroll, useTransform, motion } from "framer-motion";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
];

const ParallaxScroll = () => {
  //USE DIMENSION IS NOT WORK PROPERLY
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    //when to start and end the animation (related to target element)
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spaces}>scroll down</div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[2], images[4]]} y={y1} />
        <Column images={[images[5], images[6], images[3]]} y={y2} />
        <Column images={[images[5], images[3], images[2]]} y={y3} />
        <Column images={[images[2], images[0], images[3]]} y={y4} />
      </div>
      <div className={styles.spaces}></div>
    </main>
  );
};
export default ParallaxScroll;

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((scr, idx) => (
        <div key={idx} className={styles.imageContainer}>
          <Image src={`/images/${scr}`} fill alt="img" />
        </div>
      ))}
    </motion.div>
  );
};
