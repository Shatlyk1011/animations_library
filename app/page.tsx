"use client";
import { FC, useEffect } from "react";

interface Props {}

import styles from "./styles.module.scss";
import Link from "next/link";

const Page: FC<Props> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/infinite_text">Infinite Text scroll</Link>
        <Link href="/mask_text">Masked Text</Link>
        <Link href="/parallax_scroll">Parallax Scroll</Link>
        <Link href="/curved_menu">Curved Menu</Link>
        <Link href="/text_gradient_scroll">Text Gradient Scroll</Link>
        <Link href="/nav_menu">Nav Menu</Link>
        <Link href="/text_mask_animation">Text Mask Animation</Link>
        <Link href="/text_clip_mask_on_scroll">Text Clip Mask On Scroll</Link>
        <Link href="/floating_image_gallery">Floating Image Gallery</Link>

        <Link href="/"> ADD NEW</Link>
      </div>
    </main>
  );
};
export default Page;
