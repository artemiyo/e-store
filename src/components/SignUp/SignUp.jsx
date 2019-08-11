import React, { Component } from "react";
import FormInput from "../FormInput";
import Button from "../Button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <form className="form form--sign-up" onSubmit={this.handleSubmit}>
        <h1 className="form__title form__title--sign-up">Sign Up</h1>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={this.handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    );
  }
}

export default SignUp;
