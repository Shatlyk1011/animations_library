"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Cards/floating_image_gallery">Floating Image Gallery</Link>
        <Link href="/Cards/parallax_scroll">Parallax Scroll</Link>
        <Link href="/Cards/card_hover">Card Hover</Link>

        <Link href="/"> HOME</Link>
      </div>
    </main>
  );
};
export default Page;
