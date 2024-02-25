"use client";
import styles from "./styles.module.scss";

import MaskText from "./components/MaskText";

export default function Home() {
  return (
    <div className={styles.container}>
      <MaskText />
      <MaskText />
      <MaskText />
      <MaskText />
    </div>
  );
}
