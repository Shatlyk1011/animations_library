"use client";
import { FC } from "react";

interface Props {}

import styles from "./styles.module.scss";
import Link from "next/link";

const Page: FC<Props> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/infinite_text">Infinite Text scroll</Link>
        <Link href="/"> ADD NEW</Link>
      </div>
    </main>
  );
};
export default Page;
