"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

const Page = () => {

  const links = [
    { src: '/Headers', title: 'HEADER COMPONENTS' },
    { src: '/Cards', title: 'CARD COMPONENTS' },
    { src: '/Fancy', title: 'FANCY COMPONENTS' },
    { src: '/Text', title: 'TEXT COMPONENTS' },
    { src: '/Hero', title: 'HERO COMPONENTS' },
    { src: '/OnScroll', title: 'ON SCROLL' },
    { src: '/Other', title: 'other staffs' },
  ]

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        {links.map(({ src, title }) => (
          <Link key={src} href={src}>{title}</Link>
        ))}
      </nav>
    </main>
  );
};
export default Page;
