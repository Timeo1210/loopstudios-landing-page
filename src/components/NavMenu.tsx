import React from "react";

interface NavMenuProps {
  navClassName?: string;
  ulClassName?: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ navClassName, ulClassName }) => {
  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
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
