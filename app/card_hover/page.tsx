"use client";
import { MouseEvent } from "react";
import styles from "./styles.module.scss";

const CardHover = () => {
  let x = 0;
  let y = 0;
  // https://codepen.io/Hyperplexed/pen/MWQeYLW?editors=0010

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // convert to react base
    // let cardd = document.getElementsByClassName("card");
    // for (const card of cardd) {
    //   const rect = card.getBoundingClientRect(),
    //     x = e.clientX - rect.left,
    //     y = e.clientY - rect.top;
    //   card.style.setProperty("--mouse-x", `${x}px`);
    //   card.style.setProperty("--mouse-y", `${y}px`);
    // }
    //
  };

  return (
    <div className={styles.main} onMouseMove={handleMouseMove}>
      <div className={styles.cards}>
        <div onMouseMove={(e) => handleMouseMove(e)} className={styles.card}>
          <div className={styles.card_border}></div>
          <div className={styles.card_content}></div>
        </div>
        <div onMouseMove={(e) => handleMouseMove(e)} className={styles.card}>
          <div className={styles.card_border}></div>
          <div className={styles.card_content}></div>
        </div>
        <div onMouseMove={(e) => handleMouseMove(e)} className={styles.card}>
          <div className={styles.card_border}></div>
          <div className={styles.card_content}></div>
        </div>
        <div onMouseMove={(e) => handleMouseMove(e)} className={styles.card}>
          <div className={styles.card_border}></div>
          <div className={styles.card_content}></div>
        </div>
        <div onMouseMove={(e) => handleMouseMove(e)} className={styles.card}>
          <div className={styles.card_border}></div>

          <div className={styles.card_content}></div>
        </div>
        <div onMouseMove={(e) => handleMouseMove(e)} className={styles.card}>
          <div className={styles.card_border}></div>
          <div className={styles.card_content}></div>
        </div>
      </div>
    </div>
  );
};
export default CardHover;
