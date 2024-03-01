"use client";
import styles from "./styles.module.scss";

const CardBlur = () => {
  let y = 0;

  return (
    <div className={styles.main}>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="noise">
            <feTurbulence baseFrequency="0.7,0.8" seed="0" type="fractalNoise" result="static">
              <animate
                attributeName="seed"
                values="0;100"
                dur="800ms"
                repeatCount="1"
                begin="card.mouseenter"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="static">
              <animate
                attributeName="scale"
                values="0;50;0"
                dur="800ms"
                repeatCount="1"
                begin="card.mouseenter"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div id={styles.card}>
        <img
          src="https://images.unsplash.com/photo-1708986662906-2f3030e2dab2?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};
export default CardBlur;
