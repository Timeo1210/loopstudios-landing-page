import React, { useContext } from "react";

import styles from "@/styles/home/Creations/Creations.module.css";

import { WindowDimensionsContext } from "src/contexts/WindowDimensionsContext";

import LinkButton from "@/components/LinkButton";
import Card from "@/components/home/Creations/Card/Card";

const Creations: React.FC<{}> = ({}) => {
  const { width } = useContext(WindowDimensionsContext);

  return (
    <section className={styles.container}>
      <div className={styles.upWrapper}>
        <h1>OUR CREATIONS</h1>
        {width >= 1150 && <LinkButton text="SEE ALL" />}
      </div>
      <div className={styles.grid}>
        <Card text="DEEP EARTH" imgURL="image-deep-earth.jpg" />
        <Card text="NIGHT ARCADE" imgURL="image-night-arcade.jpg" />
        <Card text="SOCCER TEAM VR" imgURL="image-soccer-team.jpg" />
        <Card text="THE GRID" imgURL="image-grid.jpg" />
        <Card text="FROM UP ABOVE VR" imgURL="image-from-above.jpg" />
        <Card text="POCKET BOREALIS" imgURL="image-pocket-borealis.jpg" />
        <Card text="THE CURIOSITY" imgURL="image-curiosity.jpg" />
        <Card text="MAKE IT FISHEYE" imgURL="image-fisheye.jpg" />
        {width < 1150 && width >= 900 && <LinkButton text="SEE ALL" />}
      </div>
      <div className={styles.downWrapper}>
        {width < 900 && <LinkButton text="SEE ALL" />}
      </div>
    </section>
  );
};

export default Creations;
