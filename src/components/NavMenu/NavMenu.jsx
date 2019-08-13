import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./NavMenu.scss";

const NavMenu = props => {
  console.log(props.match);
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/shop/men">
            MEN
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/shop/women">
            WOMEN
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/shop/lifestyle">
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

export default withRouter(NavMenu);
