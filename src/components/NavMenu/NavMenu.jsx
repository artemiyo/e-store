import React from "react";
import { Link } from "react-router-dom";

import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/men">
            HE
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/women">
            SHE
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/lifestyle">
            LIFESTYLE
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/contacts">
            CONTACTS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
