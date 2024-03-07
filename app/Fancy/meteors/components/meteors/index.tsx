"use client";
import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  number?: number;
  className?: string;
}

const Meteors: FC<Props> = ({ className, number }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={`${styles.meteor} ${className}`}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
export default Meteors;
