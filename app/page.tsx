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
      <h1 className="text-[2.5vw] text-center leading-[110%] font-semibold border-4 mb-[1vw] border-slate-600 border-dashed py-4 text-slate-800">Different kind of animations divided by area of usage with source code provided.</h1>
      <h2 className="text-[2vw] font-medium mb-[1vw] text-center">Give it a star ⭐ on <a className="border-b border-current hover:border-none" target="_blank" href="https://github.com/Shatlyk1011/animations_library">Github</a> and stay up to date</h2>
      <p className="text-[1.5vw] font-medium text-center mb-[1.5vw] text-[#666]">For contribution, read the docs on GitHub</p>
      <nav className={styles.nav}>
        {links.map(({ src, title }) => (
          <Link key={src} href={src}>{title}</Link>
        ))}
      </nav>
    </main>
  );
};
export default Page;
