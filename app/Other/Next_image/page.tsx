import DefaultBlur from "./components/static/defaultBlur";

import Picture from "../../../public/images/4.jpg";
import StaticPlaceholderBlur from "./components/static/placeholder/blur";
import StaticPlaceholderColor from "./components/static/placeholder/color";

import DynamicPlaceholderBlur from "./components/dynamic/blur";
import DynamicPlaceholderColor from "./components/dynamic/color";

import CustomOpacity from "./components/custom/opacity";
import CustomSlide from "./components/custom/slide";

import styles from "./styles.module.scss";

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <h1>Static Import</h1>
        <div className={styles.images}>
          <DefaultBlur src={Picture} />
        </div>
      </div>

      <div className={styles.section}>
        <h1>
          Static Import <br /> with Placeholder
        </h1>
        <div className={styles.images}>
          <StaticPlaceholderBlur src={"/images/5.jpg"} />
          <StaticPlaceholderColor src={"/images/5.jpg"} />
        </div>
      </div>

      <div className={styles.section}>
        <h1>
          Dynamic Import <br /> with Placeholder
        </h1>
        <div className={styles.images}>
          <DynamicPlaceholderBlur src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <DynamicPlaceholderColor src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>

      <div className={styles.section}>
        <h1>Custon In-view animation</h1>
        <div className={styles.images}>
          <CustomOpacity src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <CustomSlide src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </main>
  );
}
