import React from "react";

import styles from "@/styles/HandleLargeDisplay.module.css";

const HandleLargeDisplay: React.FC<{}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default HandleLargeDisplay;
