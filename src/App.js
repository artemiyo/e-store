import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import LifestylePage from "./pages/LifestylePage";
import ContactsPage from "./pages/ContactsPage";
import "./App.css";

const App = () => (
  <Fragment>
    <header className="header">
      <div className="container">
        <Header />
      </div>
    </header>
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/he" component={MenPage} />
        <Route path="/she" component={WomenPage} />
        <Route path="/lifestyle" component={LifestylePage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
