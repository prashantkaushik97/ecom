import React, { useState, useEffect } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import Subtotal from "./Subtotal";
import { db } from "./firebase";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("cartItems")
        .onSnapshot((snapshot) =>
          setCartItems(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      console.log("CART ITEMS", cartItems);
    } else {
      setCartItems([]);
    }
  }, [user]);
  if (user) {
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

          {cartItems?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.data.title}
              image={item.data.image}
              price={item.data.price}
              rating={item.data.rating}
            ></CheckoutProduct>
          ))}
        </div>
        <div className="checkout__right">
          <Subtotal></Subtotal>
        </div>
      </div>
    );
  } else {
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
  }
}

export default Checkout;
