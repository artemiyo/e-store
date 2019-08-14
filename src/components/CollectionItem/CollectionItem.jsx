import React from "react";
import { connect } from "react-redux";

import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { addItem } from "../../redux/cart/cartActions";

import "./CollectionItem.scss";

const CollectionItem = ({ collection, addItem }) => {
  const { name, price, imageUrl } = collection;

  return (
    <div className="collection-item">
      <img src={imageUrl} alt={name} className="collection-item__image" />
      <div className="collection-item__block">
        <div className="collection-item__description">
          <h3 className="collection-item__title">{name}</h3>
          <span className="collection-item__price">${price}</span>
        </div>
      </div>
      <Button onClick={() => addItem(collection)}>
        <FontAwesomeIcon
          className="collection-item__icon"
          icon={faShoppingBag}
        />
        Add to cart
      </Button>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
