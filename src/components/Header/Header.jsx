import React from "react";

import NavMenu from "../NavMenu";
import Logo from "../Logo";
import User from "../User";

import "./Header.scss";

const Header = () => {
  return (
    <div className="navigation">
      <Logo />
      <NavMenu />
      <User />
    </div>
  );
};

export default Header;
