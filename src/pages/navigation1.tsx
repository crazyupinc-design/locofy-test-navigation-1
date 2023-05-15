import { FunctionComponent } from "react";
import styles from "./navigation1.module.css";
const Navigation1: FunctionComponent = () => {
  return (
    <div className={styles.navigation1}>
      <div className={styles.footer}>Footer</div>
      <div className={styles.navbarButton} />
      <div className={styles.getStarted}>GET STARTED</div>
      <div className={styles.pricing}>Pricing</div>
      <div className={styles.features}>Features</div>
      <div className={styles.about}>About</div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.columns}>
        <div className={styles.column} />
        <div className={styles.column} />
      </div>
      <div className={styles.columns1}>
        <div className={styles.column2} />
        <div className={styles.column3} />
        <div className={styles.column4} />
      </div>
    </div>
  );
};

export default Navigation1;
