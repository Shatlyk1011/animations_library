"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Text/text_clip_mask_on_scroll">Text Clip Mask On Scroll</Link>
        <Link href="/Text/text_gradient_scroll">Text Gradient Scroll</Link>
        <Link href="/Text/text_mask_animation">Text Mask Animation</Link>
        <Link href="/Text/text_dispersion_effect">Text Dispersion Effect</Link>

        <Link href="/"> HOME</Link>
      </div>
    </main>
  );
};
export default Page;
