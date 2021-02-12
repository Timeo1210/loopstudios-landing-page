import React from "react";

import styles from "@/styles/home/Introduction/Introduction.module.css";

const Introduction: React.FC<{}> = ({}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        srcSet="/images/mobile/image-interactive.jpg 750w, /images/desktop/image-interactive.jpg 1440w"
      />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>THE LEADER IN INTERACTIVE VR</h2>
        <p className={styles.text}>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiances that bind their brand.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
