"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Fancy/svg_bezier_curve">Svg Bezier Curve</Link>
        <Link href="/Fancy/sticky_cursor">Sticky Cursor</Link>
        <Link href="/Fancy/spotlight" style={{ background: "gray" }}>
          Spotlight
        </Link>
        <Link href="/Fancy/tracing_beam">Tracing Beam</Link>

        <Link href="/">HOME</Link>
      </div>
    </main>
  );
};
export default Page;
