import React from "react";
import SignIn from "../../components/SignIn";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <section className="sign-in">
      <div className="container">
        <div className="registration">
          <SignIn />
          <div className="sign-in-bg" />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
