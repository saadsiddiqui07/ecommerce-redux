import React from "react";
import "./Subtotal.css";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";

const Subtotal = ({ total, cart }) => {
  return (
    <div className="subtotal">
      <div className="checkout__rightContainer">
        <h2>PRICE DETAILS</h2>
        <div className="checkout__rightPrice">
          <h3>Price ({cart?.length})</h3>
          <CurrencyFormat
            renderText={value => <p>₹ {`${value}`}</p>}
            decimalScale={2}
            displayType={"text"}
            thousandSeparator={true}
            value={total}
          />
        </div>
        <div className="checkout__rightDelivery">
          <h3>Delivery Charges</h3>
          <p>FREE</p>
        </div>

        <div className="checkout__rightTotal">
          {" "}
          <h3>Total Amount</h3>
          <CurrencyFormat
            renderText={value => <p>₹ {`${value}`}</p>}
            decimalScale={2}
            displayType={"text"}
            thousandSeparator={true}
            value={total}
          />
        </div>
        <div className="checkout__rightSave">
          <p>You will save 25% on this order</p>{" "}
        </div>
      </div>
    </div>
  );
};

const mapToStateProps = store => {
  return {
    cart: store.cart,
    total: store.total
  };
};
export default connect(mapToStateProps)(Subtotal);
