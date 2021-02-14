import React, { useContext, useEffect, useState } from "react";

import styles from "@/styles/home/Header/TopBar/TopBar.module.css";

import { WindowDimensionsContext } from "src/contexts/WindowDimensionsContext";

import NavMenu from "@/components/NavMenu";

const TopBar: React.FC<{}> = () => {
  const [displayScrollingMenu, setDisplayScrollingMenu] = useState(false);

  const { device } = useContext(WindowDimensionsContext);

  useEffect(() => {
    if (device === "desktop") {
      setDisplayScrollingMenu(false);
    }
  }, [device]);

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
            <NavMenu ulClassName={styles.navbar} />
          )}
        </div>
      </div>
      {displayScrollingMenu ? (
        <NavMenu navClassName={styles.scrollingMenu} />
      ) : null}
    </>
  );
};

export default TopBar;
