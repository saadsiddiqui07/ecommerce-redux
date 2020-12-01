import React from "react";
import "./Products.css";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { ADD_TO_CART } from "../../redux/action.js";
import { connect } from "react-redux";

const Products = ({ name, title, price, discount, image, add_to_cart }) => {
  return (
    <div className="products">
      <img src={image} alt="" />
      <div className="products__info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
      <div className="products__priceInfo">
        <span className="products__price">₹{price}</span>
        <span className="products__discount">{discount} off</span>
      </div>
      <div className="products__buttons">
        <Button onClick={() => add_to_cart()} className="products__addToCart">
          <ShoppingCartIcon /> Add to Cart.
        </Button>
        <Button className="products__buyNow">
          <FlashOnIcon /> Buy now
        </Button>
      </div>
    </div>
  );
};

const mapDispatchProps = (dispatch, ownProps) => {
  const { id, name, title, price, amount, image, discount } = ownProps;
  return {
    add_to_cart: () =>
      dispatch({
        type: ADD_TO_CART,
        payload: {
          id: id,
          name: name,
          title: title,
          price: price,
          amount: amount,
          image: image,
          discount: discount,
        },
      }),
  };
};

export default connect(null, mapDispatchProps)(Products);
