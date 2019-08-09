import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import LifestylePage from "./pages/LifestylePage";
import ContactsPage from "./pages/ContactsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <Header />
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/he" component={MenPage} />
        <Route exact path="/she" component={WomenPage} />
        <Route exact path="/lifestyle" component={LifestylePage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/sign-in" component={SignInPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
