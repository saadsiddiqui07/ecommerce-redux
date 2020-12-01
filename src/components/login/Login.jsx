import React, { useState } from "react";
import "./Login.css";
import LoginImage from "./flipkart.png";
import { Button } from "@material-ui/core";
import { auth } from "../../Firebase/firebase.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TO LOGIN AS A NEW USER
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  // SIGN IN WITH THE REGISTERED ACCOUNT
  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <img src={LoginImage} alt="" />
        </div>
        <div className="login__right">
          <form>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login__input"
              placeholder="Email"
            />

            <input
              type="password"
              className="login__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={login}>
              LOGIN
            </Button>
          </form>
          <Button onClick={signUp}>New to flipkart? Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
