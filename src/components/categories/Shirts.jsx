import React from "react";
import "./Shirts.css";
import Products from "../products/Products.jsx";

const Shirts = () => {
  return (
    <div className="shirts">
      <Products
        id={1}
        amount={1}
        name="Saad Siddiqui"
        title="Men's Shirt"
        price="900"
        discount="58%"
        image="https://cdn.shopify.com/s/files/1/3009/7540/products/product-image-662535441_grande.jpg?v=1571722892"
      />
      <Products
        id={2}
        name="Shane watson"
        amount={1}
        title="Men Regular Shirts"
        price="600"
        discount="28%"
        image="https://contents.mediadecathlon.com/p1484240/ab565f3675dbdd7e3c486175e2c16583/p1484240.jpg"
      />
      <Products
        id={3}
        name="Saad Siddiqui"
        amount={1}
        title="Men Regular Shirts"
        price="300"
        discount="70%"
        image="https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"
      />
      <Products
        id={4}
        name="Saad Siddiqui"
        title="Men Regular Shirts"
        price="1000"
        amount={1}
        discount="58%"
        image="https://5.imimg.com/data5/CF/NX/MY-12496108/party-wear-casual-shirt-500x500.jpg"
      />
      <Products
        id={5}
        name="Saad Siddiqui"
        amount={1}
        title="Men Regular Shirts"
        price="340"
        discount="58%"
        image="https://images-na.ssl-images-amazon.com/images/I/410el0B7L6L.jpg"
      />
      <Products
        id={6}
        name="Saad Siddiqui"
        title="Men Regular Shirts"
        amount={1}
        price="800"
        discount="58%"
        image="https://contents.mediadecathlon.com/p1484254/b8b866098cd55cb9ded00538625e84ca/p1484254.jpg?f=650x650&format=auto"
      />
    </div>
  );
};

export default Shirts;
