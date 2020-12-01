import React from "react";
import "./Tshirts.css";
import Products from "../products/Products.jsx";

const Tshirts = () => {
  return (
    <div className="tshirts">
      <Products
        id={7}
        name="John Doe"
        title="Men Regular T-shirts"
        amount={1}
        price="400"
        discount="28%"
        image="https://i.pinimg.com/originals/17/e4/c6/17e4c6c929e8c8be39be55734e83cdd8.jpg"
      />
      <Products
        id={8}
        name="Saad Siddiqui"
        title="Men's comfortable Regular T-shirts"
        amount={1}
        price="350"
        discount="18%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrmrFdmp6Bt4pMmSKEtUqcD1ALGLruzv6mDg&usqp=CAU"
      />
      <Products
        id={9}
        name="Shane"
        title="Men Regular T-shirts"
        price="200"
        amount={1}
        discount="40%"
        image="https://www.crowddesigns.in/wp-content/uploads/2019/02/IFMR-Life-Tshirts.jpeg"
      />
      <Products
        id={10}
        name="John Doe"
        title="Men Regular T-shirts"
        price="900"
        discount="58%"
        amount={1}
        image="https://i.pinimg.com/originals/17/e4/c6/17e4c6c929e8c8be39be55734e83cdd8.jpg"
      />
      <Products
        id={11}
        name="John Doe"
        title="Men Regular T-shirts"
        price="280"
        discount="75%"
        amount={1}
        image="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C61a1a2QNTTL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png"
      />
      <Products
        id={12}
        name="John Doe"
        title="Men Regular T-shirts"
        amount={1}
        price="300"
        discount="28%"
        image="https://images-na.ssl-images-amazon.com/images/I/61P5HOeEmdL._AC_UX679_.jpg"
      />
    </div>
  );
};

export default Tshirts;
