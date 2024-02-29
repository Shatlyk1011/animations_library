"use client";

import { Spotlight } from "./components/Spotlight";

import styles from "./styles.module.scss";

export default function Index() {
  return (
    <div style={{ background: "#404040", width: "100vw", height: "100vh" }}>
      <h1>hello world</h1>
      <Spotlight fill="#fff" className={styles.test} />
    </div>
  );
}
