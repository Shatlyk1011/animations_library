"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Fancy/svg_bezier_curve">Svg Bezier Curve</Link>
        <Link href="/Fancy/meteors">Meteors</Link>
        <Link href="/Fancy/canvas_blocks">Canvas Blocks</Link>

        <Link href="/">HOME</Link>
      </div>
    </main>
  );
};
export default Page;
