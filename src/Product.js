import React from "react";
import { db } from "./firebase";

import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ title, image, price, rating, id }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const addToBasket = () => {
    if (user) {
      db.collection("users").doc(user?.uid).collection("cartItems").add({
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      });
    }

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info"></div>
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
