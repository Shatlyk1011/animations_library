"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Headers">HEADER COMPONENTS</Link>
        <Link href="/Cards">CARD COMPONENTS</Link>
        <Link href="/Fancy">FANCY COMPONENTS</Link>
        <Link href="/Text">TEXT COMPONENTS</Link>
        <Link href="/Hero">HERO COMPONENTS</Link>
        <Link href="/OnScroll">ON SCROLL</Link>
        <Link href="/Other">other staffs</Link>

        <Link href="/"> HOME</Link>
      </div>
    </main>
  );
};
export default Page;
