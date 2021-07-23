import React from "react";
import { CartItemWrapper } from "./style";
import { RiDeleteBin5Line } from "react-icons/ri";
const CartItem = ({ item, onIncreaseCart, onDecreaseCart, onDeleteToCart }) => {
  // console.log(item, "item");
  return (
    <CartItemWrapper key={item.id}>
      <span className="img-cart">
        <img className="img-fluid" src={item.src} />
      </span>
      <div className="detail-cart">
        <p className="title-cart">{item.title}</p>
        <p className="desc">
          {item.availableSizes[0]} | {item.style}
          <br />
          Quantity: {item.quantity}
        </p>
      </div>
      <div className="action-cart">
        <span
          className="btn-delete btn-cart-item"
          onClick={() => onDeleteToCart(item.id)}
        >
          <RiDeleteBin5Line />
        </span>
        <span className="price-cart">
          <small>$</small>
          <b>{item.price.toFixed(2)}</b>
        </span>
        <span className="group-btn">
          <button
            className="btn-asc btn-cart-item"
            onClick={() => onIncreaseCart(item.id)}
          >
            +
          </button>
          <button
            disabled={item.quantity === 1}
            className="btn-desc btn-cart-item"
            onClick={() => onDecreaseCart(item.id)}
          >
            -
          </button>
        </span>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
