import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/selectors";

const CollectionPage = () => {
  const { title } = this.props.collection;
  return <div>{title}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.category)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
