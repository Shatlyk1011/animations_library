//works with dynamic imported images from the server;
//requires: plaiceholder installation and next configuration

"use server";
import Image from "next/image";
import fs from "node:fs/promises";

import { getPlaiceholder } from "plaiceholder";

import styles from "../../../styles.module.scss";

const blur = async ({ src }) => {
  const buffer = await fs.readFile(`./public${src}`);

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
