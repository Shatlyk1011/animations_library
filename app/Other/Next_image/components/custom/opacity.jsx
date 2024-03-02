"use client";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import styles from "../../styles.module.scss";

const Opacity = ({ src }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={styles.container}>
      <p>Opacity</p>
      <div ref={ref} style={{ backgroundColor: "#2f2" }} className={styles.imageContainer}>
        <Image
          src={src}
          fill={true}
          alt="image"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.2s ease" }}
        />
      </div>
    </div>
  );
};
export default Opacity;
