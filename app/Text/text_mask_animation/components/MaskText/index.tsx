import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.scss";

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout.",
];

export default function Index() {
  const animation = {
    initial: { y: "100%" },
    enter: (i: any) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
