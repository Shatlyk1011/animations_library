"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Headers/curved_menu">Curved Menu</Link>
        <Link href="/Headers/nav_menu">Nav Menu</Link>
        <Link href="/Headers/sliding_stairs_menu">Sliding Stairs Menu</Link>

        <Link href="/"> HOME</Link>
      </div>
    </main>
  );
};
export default Page;
