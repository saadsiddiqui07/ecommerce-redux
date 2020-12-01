import React from "react";
import "./CheckoutProduct.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { REMOVE_FROM_CART, INCREASE, DECREASE } from "../../redux/action.js";

const CheckoutProduct = ({
  id,
  name,
  title,
  price,
  image,
  amount,
  discount,
  remove_from_cart,
  increase_amount,
  decrease_amount
}) => {
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__left">
        <img src={image} alt="" />
        <div className="checkoutProduct__quantity">
          <RemoveIcon
            onClick={() => decrease_amount()}
            className="checkoutProduct__quantityIcon"
          />
          <span>{amount}</span>
          <AddIcon
            onClick={() => increase_amount()}
            className="checkoutProduct__quantityIcon"
          />
        </div>
      </div>
      <div className="checkoutProduct__right">
        <h2>{title}</h2>
        <h3>Seller: {name}</h3>
        <div className="checkoutProduct__rightInfo">
          <h2>₹ {price}</h2>
          <h4>{discount} off</h4>
        </div>
        <h1>3 offers available</h1>
        <Button onClick={() => remove_from_cart()}>REMOVE</Button>
      </div>
    </div>
  );
};

const mapToDispatchProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove_from_cart: () =>
      dispatch({ type: REMOVE_FROM_CART, payload: { id } }),
    increase_amount: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease_amount: () => dispatch({ type: DECREASE, payload: { id, amount } })
  };
};
export default connect(null, mapToDispatchProps)(CheckoutProduct);
