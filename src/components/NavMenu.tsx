import React from "react";

import styles from "@/styles/NavMenu.module.css";

interface NavMenuProps {
  navClassName?: string;
  ulClassName?: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ navClassName, ulClassName }) => {
  return (
    <nav className={navClassName}>
      <ul className={[styles.list, ulClassName].join(" ")}>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
