import React from "react";

import "./withSpinner.scss";

const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner">
      <div className="spinner__container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
