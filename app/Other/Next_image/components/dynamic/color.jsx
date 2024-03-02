//works with dynamic imported images from the server;
//requires: plaiceholder installation and next configuration

//requires next configuration > images source array
"use server";
import Image from "next/image";

import { getPlaiceholder } from "plaiceholder";

import styles from "../../styles.module.scss";

const Color = async ({ src }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { color } = await getPlaiceholder(buffer);
  return (
    <div className={styles.container}>
      <p>Color</p>
      <div style={{ backgroundColor: color.hex }} className={styles.imageContainer}>
        <Image src={src} fill={true} alt="image" />
      </div>
    </div>
  );
};
export default Color;
