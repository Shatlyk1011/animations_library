//works with dynamic imported images from the server;
//requires: plaiceholder installation and next configuration

//requires next configuration > images source array
"use server";
import Image from "next/image";

import { getPlaiceholder } from "plaiceholder";

import styles from "../../styles.module.scss";

const blur = async ({ src }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div className={styles.container}>
      <p>Blur</p>
      <div className={styles.imageContainer}>
        <Image src={src} fill={true} alt="image" placeholder="blur" blurDataURL={base64} />
      </div>
    </div>
  );
};
export default blur;
