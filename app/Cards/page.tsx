"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Cards/parallax_scroll">Parallax Scroll</Link>
        <Link href="/Cards/zoom_parallax">Zoom Parallax</Link>
        <Link href="/Cards/parallax_2_ways">2 ways parallax</Link>
        <Link href="/Cards/cards_parallax">Cards Parallax</Link>
        <Link href="/Cards/card_noise_effect">Card Noise Effect</Link>
        <Link href="/Cards/HorizontalScroll">Horizontal scroll</Link>

        <Link href="/"> HOME</Link>
      </div>
    </main>
  );
};
export default Page;
