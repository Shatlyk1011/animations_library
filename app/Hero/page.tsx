"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/Hero/floating_image_gallery">Floating Image Gallery</Link>

        <Link href="/"> GO HOME</Link>
      </div>
    </main>
  );
};
export default Page;
