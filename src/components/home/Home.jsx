import React from "react";
import "./Home.css";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Shirts from "../categories/Shirts.jsx";
import Tshirts from "../categories/Tshirts.jsx";
const Home = () => {
  return (
    <div className="home">
      <div className="home__categories">
        <div className="home__options">
          <p>Electronics</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>TVs & Appliances</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>Men</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>Women</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>Baby & Kids</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>Home & Furniture</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>Sports, Books & More</p>
          <ExpandMoreOutlinedIcon className="home__optionsIcon" />
        </div>
        <div className="home__options">
          <p>Flights</p>
        </div>
        <div className="home__options">
          <p>Offer Zone</p>
        </div>
      </div>
      <div className="home__ad">
        <img
          src="https://www.couponhai.com/wp-content/uploads/2017/11/flipkart-big-diwali-sale-shubbhi-labh-bhi-couponhai.jpg"
          alt=""
        />
        <img
          src="https://lh3.googleusercontent.com/proxy/RZmQVDjN-6Wxuw1kWkgFSea6j_8ek9yTCilCckJrH-75GWBuGXJrXiU9a-6jIau_y9j8HkWhlJn_rYH2sjv0WURXKKSYH_jk6QvDIu7qpHHEEHcVIf-srPtPwajgFAl0ii635la6MLCQCtCGlw"
          alt=""
        />
        <img
          src="https://i0.wp.com/www.3ghackerz.com/wp-content/uploads/2017/12/flipkart-fashion-days-sale.jpg?fit=948%2C382&ssl=1"
          alt=""
        />
      </div>
      <div className="home__products">
        <Shirts />
      </div>
      <div className="home__products">
        <Tshirts />
      </div>
    </div>
  );
};

export default Home;
