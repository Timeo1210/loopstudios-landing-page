import React from "react";

import styles from "@/styles/home/Header/Header.module.css";

import TopBar from "./TopBar";

const Header: React.FC<{
  backgroundImageRef: React.MutableRefObject<any>;
}> = ({ backgroundImageRef }) => {
  return (
    <header
      className={styles.container}
      style={{ height: backgroundImageRef.current.height || 1334 }}
    >
      <TopBar />
      <div className={styles.sloganContainer}>
        <div className={styles.sloganWrapper}>
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
