import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import "./Icons.scss";

const Icons = () => {
  return (
    <div className="icons">
      <Link className="icons__item" to="/">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <FontAwesomeIcon className="icons__item" icon={faShoppingBag} />
    </div>
  );
};

export default Icons;
