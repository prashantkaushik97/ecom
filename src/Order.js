import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>Order id: {order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <div>
          <div className="orderedProduct">
            <img className="orderedProduct__image" src={item.image} />

            <div className="orderedProduct__info">
              <p className="orderedProduct__title">{item.title}</p>
              <p className="orderedProduct__price">
                <small>$</small>
                <strong>{item.price}</strong>
              </p>
            </div>
          </div>
        </div>
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
