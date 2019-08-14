import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/selectors";

import CartItem from "../../components/CartItem";

import "./CartPage.scss";

const CartPage = ({ cartItems, total }) => {
  if (cartItems.length === 0) {
    return <div className="cart__empty">The cart is empty!</div>;
  }

  return (
    <section className="cart">
      <div className="container">
        <h1 className="heading-primary">Cart Items</h1>
        <div className="cart-header">
          <div className="cart-header__block">
            <span>Product</span>
          </div>
          <div className="cart-header__block">
            <span>Description</span>
          </div>
          <div className="cart-header__block">
            <span>Quantity</span>
          </div>
          <div className="cart-header__block">
            <span>Price</span>
          </div>
          <div className="cart-header__block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="cart-total">
          <span>TOTAL: ${total}</span>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CartPage);
