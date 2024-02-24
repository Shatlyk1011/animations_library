"use client";
import { useRef } from "react";

import styles from "./styles.module.scss";
import { img1, img2, img3, img4, img5, img6 } from "./data";
import Image from "next/image";
import gsap from "gsap";

const FloadingImage = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce = movementX * speed;
    yForce = movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
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
    <main onMouseMove={(e) => manageMouseMove(e)} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
        <Image src={img1} width={300} alt="image" />
        <Image src={img2} width={300} alt="image" />
        <Image src={img3} width={300} alt="image" />
      </div>

      <div ref={plane2} className={styles.plane}>
        <Image src={img5} width={300} alt="image" />
        <Image src={img1} width={300} alt="image" />
        <Image src={img4} width={300} alt="image" />
      </div>

      <div ref={plane3} className={styles.plane}>
        <Image src={img3} width={300} alt="image" />
        <Image src={img6} width={300} alt="image" />
        <Image src={img4} width={300} alt="image" />
      </div>
    </main>
  );
};
export default FloadingImage;
