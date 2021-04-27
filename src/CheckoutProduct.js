import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function CheckoutProduct({ title, image, price, rating, id }) {
  const [{ basket, user }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    if (!user) {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    } else {
      //CODE HERE FOR USER
      db.collection("users")
        .doc(user?.uid)
        .collection("cartItems")
        .doc(id)
        .delete();
    }
  };
  //TO BE IMPLEMENTED
  const changeQuantity = (newQuantity) => {
    if (!user) {
      dispatch({});
    } else {
      db.collection("cartItems")
        .doc(id)
        .update({
          quantity: parseInt(newQuantity),
        });
    }
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
