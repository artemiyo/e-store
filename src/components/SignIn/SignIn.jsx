import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";
import Button from "../Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="form__title">Sign In</h1>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={this.state.email}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={this.state.password}
          handleChange={this.handleChange}
          required
        />
        <div className="form__text">
          Don't have account?
          <Link className="form__link" to="/sign-up">
            Sign Up!
          </Link>
        </div>
        <div className="form__buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} googleSignInBtn>
            Sign In With Google
          </Button>
        </div>
      </form>
    );
  }
}

export default SignIn;
