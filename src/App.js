import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/selectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactsPage from "./pages/ContactsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="container">
            <Header />
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/shop/:category" component={ShopPage} />
          <Route path="/cart" component={CartPage} />
          <Route
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
