"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>

        <Link href="/"> GO HOME</Link>
      </div>
    </main>
  );
};
export default Page;
