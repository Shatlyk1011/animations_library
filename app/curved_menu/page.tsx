"use client";
import { FC } from "react";

import Header from "./components/header";

import styles from "./styles.module.scss";

interface Props {}

const CurverMenu: FC<Props> = () => {
  return (
    <div className={styles.menu}>
      <Header />
    </div>
  );
};
export default CurverMenu;
