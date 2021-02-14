import React from "react";

import styles from "@/styles/home/Footer/Footer.module.css";

import NavMenu from "@/components/NavMenu";
import HandleLargeDisplay from "@/components/HandleLargeDisplay";

const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className={styles.container}>
      <HandleLargeDisplay>
        <div className={styles.wrapper}>
          <div className={styles.navWrapper}>
            <h2>LOOPSTUDIOS</h2>
            <NavMenu ulClassName={styles.navMenuList} />
          </div>
          <div>
            <div className={styles.iconWrapper}>
              <img src="/images/icon-facebook.svg" alt="facebook" />
              <img src="/images/icon-twitter.svg" alt="twitter" />
              <img src="/images/icon-pinterest.svg" alt="pinterest" />
              <img src="/images/icon-instagram.svg" alt="instagram" />
            </div>
            <span className={styles.certificate}>
              © 2021 Loopstudios. All rights reserved.
            </span>
          </div>
        </div>
      </HandleLargeDisplay>
    </footer>
  );
};

export default Footer;
