import React, { useContext } from "react";

import styles from "@/styles/home/Creations/Card/Card.module.css";

import { WindowDimensionsContext } from "src/contexts/WindowDimensionsContext";

interface CardProps {
  imgURL: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ imgURL, text }) => {
  const { device } = useContext(WindowDimensionsContext);

  const alt = imgURL
    .slice(0, imgURL.indexOf("."))
    .replaceAll("-", " ")
    .replace("image", "")
    .trim();

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          style={{ width: "100%" }}
          src={`/images/${device}/${imgURL}`}
          alt={alt}
        />
      </div>
      <a className={styles.wrapper}>
        <h3>{text}</h3>
      </a>
    </div>
  );
};

export default Card;
