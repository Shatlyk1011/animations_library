"use client";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import styles from "../../styles.module.scss";

const Slide = ({ src }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={styles.container}>
      <p>Slide</p>
      <div
        ref={ref}
        style={{ backgroundColor: "#2f2", overflow: "hidden" }}
        className={styles.imageContainer}
      >
        <Image src={src} fill={true} alt="image" style={{ opacity: inView ? 1 : 0 }} />
        <div
          style={{
            backgroundColor: "#3ea6ff",
            width: "100%",
            height: "100%",
            position: "relative",
            top: 0,
            left: inView ? "100%" : "0%",
            zIndex: 1,
            transition: "all 0.6s ease",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Slide;
