//works with staticly imported images;

import styles from "../../styles.module.scss";

import Image from "next/image";

const DefaultBlur = ({ src }) => {
  return (
    <div className={styles.container}>
      <p>default `Image` blur</p>
      <div className={styles.imageContainer}>
        <Image src={src} fill={true} alt="image" placeholder="blur" />
      </div>
    </div>
  );
};
export default DefaultBlur;
