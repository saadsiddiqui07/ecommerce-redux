import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../Firebase/firebase.js";

const Header = ({ cart, user }) => {
  const history = useHistory();

  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          {" "}
          <img
            className="header__logo"
            src="https://couponcode-images.s3-ap-southeast-1.amazonaws.com/public/shop/240.jpg"
            alt=""
          />
        </Link>

        <div className="header__search">
          <input placeholder="Search for products, brands and more" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__login">
          {user ? (
            <>
              <Button onClick={signOut} className="header__loginButton">
                LOGOUT
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => history.push("/login")}
                className="header__loginButton"
              >
                LOGIN
              </Button>
            </>
          )}
        </div>
        <div className="header__more">
          <h4>More</h4>
          <ExpandMoreOutlinedIcon />
        </div>
        <Link to="/checkout">
          <div className="header__cart">
            <ShoppingCartIcon className="header__cartIcon" />
            <span className="header__cartCount">{cart?.length}</span>
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapToStateProps = state => {
  return { ...state, cart: state.cart, user: state.user };
};

export default connect(mapToStateProps)(Header);
