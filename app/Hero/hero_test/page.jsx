"use client";
import { useRef } from "react";

import styles from "./styles.module.scss";

import { svg1, svg2, main } from "./data/index";
import gsap from "gsap";
import Image from "next/image";

const FloadingImage = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.02;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce = movementX * speed;
    yForce = movementY * speed;

    console.log("manageMouseMove");

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.6}` });
    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.2}` });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    // <main onMouseMove={manageMouseMove} className={styles.main}>
    <>
      <main onMouseMove={(e) => manageMouseMove(e)} className={styles.main}>
        <div ref={plane1} className={styles.plane}>
          <Image src={svg1} fill={true} />
        </div>

        <div ref={plane2} className={styles.plane}>
          <Image src={svg2} fill={true} />
        </div>

        <div ref={plane3} className={styles.plane}>
          <svg
            width="680"
            height="680"
            viewBox="0 0 680 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M680 340C680 527.777 527.777 680 340 680C152.223 680 0 527.777 0 340C0 152.223 152.223 0 340 0C527.777 0 680 152.223 680 340Z"
              fill="url(#paint0_linear_84_15)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_84_15"
                x1="340"
                y1="6.18456e-10"
                x2="339.981"
                y2="680"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0639996" stopColor="#1a1a1a" />
                <stop offset="0.580029" stopColor="#404040" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </main>
      <div style={{ height: "100vh" }}></div>
    </>
  );
};
export default FloadingImage;
