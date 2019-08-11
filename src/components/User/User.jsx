import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/selectors";
import { auth } from "../../firebase/firebase.utils";

import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

import "./User.scss";

const User = ({ history, match, currentUser }) => {
  return (
    <div className="user">
      {currentUser ? (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => history.push(`${match.url}sign-in`)}>
          Sign in
        </Button>
      )}

      <FontAwesomeIcon className="user__item" icon={faShoppingBag} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(withRouter(User));
