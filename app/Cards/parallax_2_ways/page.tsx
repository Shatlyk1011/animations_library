"use client";
import styles from "./styles.module.scss";

import GSAP from "./GSAP";
import FramerMotion from "./FramerMotion";
export default function Home() {
  return (
    <main className={styles.main}>
      <GSAP />
      <p style={{ height: "50vh" }}>divider</p>
      <FramerMotion />
    </main>
  );
}
