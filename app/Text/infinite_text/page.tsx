"use client";
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {}

import styles from "./styles.module.scss";
import Image from "next/image";

export default function Index() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=500px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };
  return (
    <div className="flex items-center overflow-hidden h-screen relative mb-[60vh]">
      <Image src="/images/5.jpg" fill={true} alt="bg" />

      <div className="absolute">
        <div ref={slider} className="relative whitespace-nowrap flex m-0 text-white" >
          <p ref={firstText} className="text-[8vw] font-medium m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p ref={secondText} className="text-[8vw] font-medium m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
