"use client";

import { Spotlight } from "./components/Spotlight";

import styles from "./styles.module.scss";

export default function Index() {
  return (
    <div className={styles.main}>
      <h1>hello world</h1>
      <Spotlight fill="#fff" className={styles.test} />
    </div>
  );
}
