import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import Link from "./link";

import styles from "./style.module.scss";

const menu = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ["1.jpg", "2.jpg"],
  },
  {
    title: "Agence",
    description: "To Learn Everything",
    images: ["3.jpg", "4.jpg"],
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["5.jpg", "6.jpg"],
  },
];

export default function index({ closeMenu }) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>

      <motion.div variants={opacity} {...mountAnim} custom={0.5} className={styles.footer}>
        <a>FB</a>
        <a>IG</a>
        <a>IN</a>
        <a>BE</a>
      </motion.div>
    </motion.div>
  );
}
