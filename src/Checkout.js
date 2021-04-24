import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  if (basket.length == 0) {
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://www.bajajfinservmarkets.in/content/dam/bajajfinserv/banner-website/credit-card/Cashback-Card_1366x371.png"
          />
          <div className="checkout__title">
            <h2>
              Hello {!user ? "Guest" : user?.email} Your shopping basket is
              empty
            </h2>
          </div>
          <div className="checkout__empty">
            <h4>Start shopping now!</h4>
            <div className="product__row">
              <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              />
              <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
            </div>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal></Subtotal>
        </div>
      </div>
    );
  } else
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://www.bajajfinservmarkets.in/content/dam/bajajfinserv/banner-website/credit-card/Cashback-Card_1366x371.png"
          />
          <div className="checkout__title">
            <h2>Your shopping basket</h2>
          </div>
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </FlipMove>
        </div>
        <div className="checkout__right">
          <Subtotal></Subtotal>
        </div>
      </div>
    );
}

export default Checkout;
