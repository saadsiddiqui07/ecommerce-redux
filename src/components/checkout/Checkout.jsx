import React, { useEffect } from "react";
import "./Checkout.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import CheckoutProduct from "./CheckoutProduct.jsx";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import checkoutEmptyImage from "./empty_cart.png";
import { useDispatch } from "react-redux";
import { GET_TOTAL } from "../../redux/action.js";
import Subtotal from "../payment/Subtotal.jsx";

const Checkout = ({ cart }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isCartEmpty = cart?.length === 0;

  useEffect(() => {
    dispatch({
      type: GET_TOTAL,
    });
  }, [dispatch, cart]);

  return (
    <div className="checkout">
      {isCartEmpty ? (
        <>
          <div className="checkout__empty">
            <h3>My Cart</h3>
            <div className="checkout__emptyContainer">
              <img src={checkoutEmptyImage} alt="" />
              <Button onClick={() => history.push("/")}>Shop Now</Button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="checkout__left">
            <div className="checkout__leftContainer">
              <div className="checkout__leftInfo">
                <h2>My Cart ({cart?.length})</h2>
                <div className="checkout__leftLocation">
                  <PinDropIcon className="location__icon" />{" "}
                  <span>Deliver to</span>
                  <span>Enter delivery pincode</span>
                  <span>Check</span>
                </div>
              </div>
              <div className="checkout__products">
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

              <Button
                disabled={isCartEmpty}
                onClick={() => history.push("/payment")}
                className="checkout__placeOrder"
              >
                PLACE ORDER
              </Button>
            </div>
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      )}
    </div>
  );
};

const mapToStateProps = (store) => {
  return {
    cart: store.cart,
    user: store.cart,
  };
};

export default connect(mapToStateProps)(Checkout);
