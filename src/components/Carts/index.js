import React from "react";
import { CartsWrapper } from "./style";
import CartItem from "../CartItem";
import { TiDeleteOutline } from "react-icons/ti";
import { FaLuggageCart } from "react-icons/fa";
import Button from "../commons/Button";
import CountCart from "../CountCart";
import CartEmpty from "../CartEmpty";

const Carts = ({
  carts,
  countCart,
  subTotal,
  isShowCart,
  setIsShowCart,
  onDecreaseCart,
  onIncreaseCart,
  onDeleteToCart,
  onCheckOutCart,
}) => {
  const RenderCarts = () => {
    if (carts.length) {
    }
  };
  return (
    <CartsWrapper isShowCart={isShowCart}>
      <span className="esc-cart" onClick={() => setIsShowCart(false)}>
        <TiDeleteOutline
          style={{
            fontSize: 60,
            color: "red",
          }}
        />
      </span>

      <div className="cart">
        <div className="header-cart">
          <FaLuggageCart style={{ fontSize: 60 }} />
          <b>CART</b>
          <CountCart
            countCart={countCart}
            style={{ position: "absolute", left: "225px", bottom: "55px" }}
          />
        </div>
        <div className="list-cart">
          {!carts.length ? (
            <CartEmpty />
          ) : (
            <>
              {carts.map((item) => (
                <CartItem
                  item={item}
                  onDecreaseCart={onDecreaseCart}
                  onIncreaseCart={onIncreaseCart}
                  onDeleteToCart={onDeleteToCart}
                />
              ))}
            </>
          )}
        </div>

        <div className="footer-cart">
          <div className="sub">
            <h3 className="sub-title">SUBTOTAL</h3>
            <div className="sub-price">
              <p>
                <b style={{ color: "red", fontSize: 22 }}>
                  $ {Number.parseFloat(subTotal).toFixed(2)}
                </b>
              </p>
              <span>
                OR UP TO <b>9</b> x $
                {/* <b>{Math.round((subTotal / 9) * 100) / 100}</b> */}
                {Number.parseFloat(subTotal / 9).toFixed(2)}
              </span>
            </div>
          </div>
          <Button
            onClick={onCheckOutCart}
            className="btn-checkout"
            children="CHECKOUT"
            type="add"
            style={{
              marginTop: "40px",
              background: "darkslategray",
            }}
          />
        </div>
      </div>
    </CartsWrapper>
  );
};

export default Carts;
