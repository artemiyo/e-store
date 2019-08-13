import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <section className="shop">
        <div className="container">
          <Route path={`${match.path}`} component={CollectionPageContainer} />
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { fetchCollectionsStartAsync }
)(ShopPage);
