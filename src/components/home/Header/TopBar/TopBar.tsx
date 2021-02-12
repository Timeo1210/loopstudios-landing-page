import React, { useContext, useEffect, useState } from "react";

import styles from "@/styles/home/Header/TopBar/TopBar.module.css";

import { WindowDimensionsContext } from "src/contexts/WindowDimensionsContext";

const TopBar: React.FC<{}> = () => {
  const [displayScrollingMenu, setDisplayScrollingMenu] = useState(false);

  const { device } = useContext(WindowDimensionsContext);

  useEffect(() => {
    if (device === "desktop") {
      setDisplayScrollingMenu(false);
    }
  }, [device]);

  const listLinks = (
    <>
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
    </>
  );

  return (
    <>
      <div className={styles.container}>
        <h1>loopstudios</h1>
        <div className={styles.menu}>
          {device === "mobile" ? (
            <button
              onClick={() => setDisplayScrollingMenu(!displayScrollingMenu)}
            >
              {displayScrollingMenu ? (
                <img src="/images/icon-close.svg" />
              ) : (
                <img src="/images/icon-hamburger.svg" />
              )}
            </button>
          ) : (
            <ul className={styles.navbar}>{listLinks}</ul>
          )}
        </div>
      </div>
      {displayScrollingMenu ? (
        <nav className={styles.scrollingMenu}>
          <ul>{listLinks}</ul>
        </nav>
      ) : null}
    </>
  );
};

export default TopBar;
