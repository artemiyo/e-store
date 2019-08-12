import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/selectors";
import withSpinner from "../../hoc/withSpinner";
import ShopPage from "./ShopPage";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(ShopPage);

export default CollectionPageContainer;
