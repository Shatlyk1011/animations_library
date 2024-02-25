"use client";
import styles from "./styles.module.scss";
import ZoomParallax from "./components/ZoomParallax";

export default function Home() {
  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  );
}
