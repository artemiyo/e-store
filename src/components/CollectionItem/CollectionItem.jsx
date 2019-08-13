import React from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import "./CollectionItem.scss";

const CollectionItem = ({ collection }) => {
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
      <Button>
        <FontAwesomeIcon
          className="collection-item__icon"
          icon={faShoppingBag}
        />
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionItem;
