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
            <h2 style={{ cursor: "pointer" }}>LOOPSTUDIOS</h2>
            <NavMenu ulClassName={styles.navMenuList} />
          </div>
          <div>
            <div className={styles.iconWrapper}>
              <a>
                <img src="/images/icon-facebook.svg" alt="facebook" />
              </a>
              <a>
                <img src="/images/icon-twitter.svg" alt="twitter" />
              </a>
              <a>
                <img src="/images/icon-pinterest.svg" alt="pinterest" />
              </a>
              <a>
                <img src="/images/icon-instagram.svg" alt="instagram" />
              </a>
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
