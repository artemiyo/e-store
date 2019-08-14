import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/selectors";
import {
  selectCartItemsCount,
  selectCartTotal
} from "../../redux/cart/selectors";
import { auth } from "../../firebase/firebase.utils";

import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

import "./User.scss";

const User = ({ history, match, currentUser, cartItemsCount, total }) => {
  return (
    <div className="user">
      {currentUser ? (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => history.push(`${match.url}sign-in`)}>
          Sign in
        </Button>
      )}
      <div
        onClick={() => history.push(`${match.url}cart`)}
        className="user__cart"
      >
        <FontAwesomeIcon className="user__item" icon={faShoppingBag} />
        <span className="user__quantity">{cartItemsCount}</span>
        <span className="user__total">$ {total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount,
  total: selectCartTotal
});

export default connect(mapStateToProps)(withRouter(User));
