"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Fancy/infinite_text">Infinite Text</Link>
        <Link href="/Fancy/mask_text">Mask Text</Link>
        <Link href="/Fancy/svg_bezier_curve">Svg Bezier Curve</Link>
        <Link href="/Fancy/sticky_cursor">Sticky Cursor</Link>

        <Link href="/">HOME</Link>
      </div>
    </main>
  );
};
export default Page;
