import React from "react";
import "./Payment.css";
import { Button } from "@material-ui/core";
import CheckoutProduct from "../checkout/CheckoutProduct.jsx";
import { connect } from "react-redux";
import Subtotal from "./Subtotal.jsx";
import { useDispatch } from "react-redux";
import { GET_TOTAL } from "../../redux/action.js";
import { useEffect } from "react";

const Payment = ({ cart, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_TOTAL,
    });
  }, [dispatch, cart]);

  return (
    <div className="payment">
      <div className="payment__left">
        <div className="payment__login">
          <div className="payment__loginInfo">
            <h3>LOGIN</h3>
            {user ? (
              <p>{user?.email}</p>
            ) : (
              <p>Please login or sign up first.</p>
            )}
          </div>
          {user && <Button>CHANGE</Button>}
        </div>
        <div className="payment__address">
          <div className="payment__addressInfo">
            <h3>DELIVERY ADDRESS</h3>
            <p>
              Saad Siddiqui 101, Bandra west, Mumbai 400050, Maharashtra 400050
            </p>
          </div>
          <Button>CHANGE</Button>
        </div>

        <div className="payment__orders">
          <div className="payment__orderInfo">
            <h3>ORDER SUMMARY</h3>
            {cart?.map((item) => (
              <CheckoutProduct
                name={item.name}
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
                image={item.image}
                discount={item.discount}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="payment__right">
        <Subtotal />
      </div>
    </div>
  );
};

const mapToStateProps = (store) => {
  return {
    cart: store.cart,
    user: store.user,
  };
};

export default connect(mapToStateProps)(Payment);
