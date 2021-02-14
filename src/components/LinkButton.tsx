import React from "react";

import styles from "@/styles/LinkButton.module.css";

const LinkButton: React.FC<{ text: string | JSX.Element }> = ({ text }) => {
  if (!text) return <></>;
  return <button className={styles.button}>{text}</button>;
};

export default LinkButton;
