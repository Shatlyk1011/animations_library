import { FC } from "react";

import styles from "./styles.module.scss";

import Header from "./components/Header";

interface Props {}

const NavMenu: FC<Props> = () => {
  return (
    <div className={styles.menu}>
      <Header />
    </div>
  );
};
export default NavMenu;
