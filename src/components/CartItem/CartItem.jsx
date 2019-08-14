import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/cart/cartActions";

import "./CartItem.scss";

const CartItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <div className="cart-item__image-box">
        <img src={imageUrl} alt={name} className="cart-item__image" />
      </div>
      <span className="cart-item__name">{name}</span>
      <div className="cart-item__quantity">
        <div className="cart-item__arrow" onClick={() => removeItem(cartItem)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <span className="cart-item__quantity-value">{quantity}</span>
        <div className="cart-item__arrow" onClick={() => addItem(cartItem)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <span className="cart-item__price">${price}</span>
      <div className="cart-item__remove" onClick={() => clearItem(cartItem)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default connect(
  null,
  { addItem, removeItem, clearItem: clearItemFromCart }
)(CartItem);
