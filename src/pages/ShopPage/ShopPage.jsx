import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <section className="shop">
        <div className="container">
          <Route />
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { fetchCollectionsStartAsync }
)(ShopPage);
