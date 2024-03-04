"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import styles from "./styles.module.scss";

import Spotlight from "./components/Spotlight";

import { main_1, main_2, main_3 } from "./data/index";

const FloadingImage = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.1;
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
    gsap.set(plane1.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

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
        <Spotlight className={styles.spotlight} />

        <h1>hello world</h1>
        <div ref={plane1} className={`${styles.plane} ${styles.plane__1}`}>
          <Image src={main_1} fill={true} alt="" />
        </div>
        {/* <Spotlight /> */}

        <div ref={plane2} className={`${styles.plane} ${styles.plane__2}`}>
          <Image src={main_2} fill={true} alt="" />
        </div>

        <div ref={plane3} className={`${styles.plane} ${styles.plane__3}`}>
          <Image src={main_3} fill={true} alt="" />
        </div>
      </main>
    </>
  );
};
export default FloadingImage;
