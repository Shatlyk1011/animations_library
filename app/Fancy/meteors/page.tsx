"use client";
import { FC } from "react";

import styles from "./styles.module.scss";
import Meteors from "./components/meteors";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Meteors number={30} />
      </div>
    </main>
  );
};
export default Page;
