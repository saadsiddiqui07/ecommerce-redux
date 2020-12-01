import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home.jsx";
import Header from "./components/home/Header.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Login from "./components/login/Login.jsx";
import Payment from "./components/payment/Payment.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER, LOGOUT } from "./redux/action";
import { auth } from "./Firebase/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //console.log("AUTH USER", authUser);
      if (authUser) {
        dispatch({
          type: SET_USER,
          payload: {
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          },
        });
      } else {
        dispatch({
          type: LOGOUT,
        });
      }
    });
    // performing a clean-up action
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // console.log("STORE USER", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
