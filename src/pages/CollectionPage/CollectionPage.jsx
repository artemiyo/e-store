import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/selectors";

import CollectionItem from "../../components/CollectionItem";

import "./CollectionPage.scss";

const CollectionPage = props => {
  const { items, title } = props.collection;

  return (
    <div className="collection-page">
      <h1 className="heading-primary">{title}</h1>
      <div className="collection-items">
        {items.map((collection, idx) => (
          <CollectionItem key={items[idx].id} collection={collection} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.category)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
