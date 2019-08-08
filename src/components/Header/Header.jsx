import React from "react";

import NavMenu from "../NavMenu";
import Logo from "../Logo";
import Icons from "../Icons";

import "./Header.scss";

const Header = () => {
  return (
    <div className="navigation">
      <Logo />
      <NavMenu />
      <Icons />
    </div>
  );
};

export default Header;
