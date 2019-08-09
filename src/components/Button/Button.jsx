import React from "react";

import "./Button.scss";

const Button = ({ children, googleSignInBtn, ...otherProps }) => {
  return (
    <button
      className={`btn ${googleSignInBtn ? "google" : ""} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
