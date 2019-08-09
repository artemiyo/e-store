import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

import "./User.scss";

const User = ({ history, match }) => {
  console.log(match);
  return (
    <div className="user">
      <Button onClick={() => history.push(`${match.url}sign-in`)}>
        Sign in
      </Button>
      <FontAwesomeIcon className="user__item" icon={faShoppingBag} />
    </div>
  );
};

export default withRouter(User);
