import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FilterSize from "../../components/FilterSize";
import Products from "../../components/Products";
import { ProductContainerWrapper } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Carts from "../../components/Carts";
import CountCart from "../../components/CountCart";
import {
  addToCart,
  checkOutCart,
  decreaseToCart,
  deleteToCart,
  increaseToCart,
} from "./actions";

var _ = require("lodash");

const ProductContainer = ({
  listProduct,
  carts,
  handleAddToCart,
  handleDeleteCart,
  handleDecreaseCart,
  handleIncreaseCart,
  handleCheckOut,
}) => {
  const [productBySize, setProductBySize] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [currentSize, setCurrentSize] = useState([]);

  const [countCart, setCountCart] = useState(0);
  useEffect(() => {
    let totalCart = carts.reduce((total, cart) => total + cart.quantity, 0);
    setCountCart(totalCart);
  }, [carts]);

  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let totalPrice = carts.reduce(
      (total, cart) => total + cart.quantity * cart.price,
      0
    );
    setSubTotal(totalPrice);
  }, [carts]);

  const [countProduct, setCountProduct] = useState(0);
  useEffect(() => {
    if (!currentSize.length) setCountProduct(listProduct.length);
    else {
      let newProductBySize = productBySize.length;
      setCountProduct(newProductBySize);
    }
  }, [productBySize, listProduct]);

  //name(size)
  const handleSelectSize = (name) => {
    // nếu đã chọn thì bỏ, chưa chọn thì chọn
    let isChoose = currentSize.includes(name);
    if (isChoose) {
      let newCurr = currentSize.filter((item) => item !== name);
      setCurrentSize(newCurr);
    } else setCurrentSize([...currentSize, name]);
  };
  //hien thi san pham khi chon size
  //lodash _.intersection([a],[b]) : giao giưa 2 tập hợp
  useEffect(() => {
    let newProductBySize = [...listProduct].filter((product) => {
      const result = _.intersection(product.availableSizes, currentSize);
      return result.length;
    });
    setProductBySize(newProductBySize);
  }, [currentSize]);

  const onAddtoCart = (product) => {
    let result = [...carts].findIndex((cart) => cart.id === product.id);
    console.log(result, "result");
    if (result === -1) handleAddToCart(product);
    else onIncreaseCart(product.id);
  };
  const onDeleteToCart = (id) => {
    handleDeleteCart(id);
  };
  const onDecreaseCart = (id) => {
    handleDecreaseCart(id);
  };
  const onIncreaseCart = (id) => {
    handleIncreaseCart(id);
  };
  const onCheckOutCart = () => {
    alert(`Total money you have to pay : ${subTotal.toFixed(2)}`);
    handleCheckOut();
  };

  return (
    <ProductContainerWrapper>
      <FilterSize handleSelectSize={handleSelectSize} />
      <Products
        countProduct={countProduct}
        products={currentSize.length ? productBySize : listProduct}
        onAddtoCart={onAddtoCart}
      />
      <div className="icon-cart" onClick={() => setIsShowCart(true)}>
        <AiOutlineShoppingCart style={{ fontSize: 35 }} />
        <CountCart
          countCart={countCart}
          style={{ position: "absolute", left: "28px", bottom: "33px" }}
        />
      </div>
      <Carts
        carts={carts}
        countCart={countCart}
        subTotal={subTotal}
        isShowCart={isShowCart}
        setIsShowCart={setIsShowCart}
        onDecreaseCart={onDecreaseCart}
        onIncreaseCart={onIncreaseCart}
        onDeleteToCart={onDeleteToCart}
        onCheckOutCart={onCheckOutCart}
      />
    </ProductContainerWrapper>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    listProduct: state.cartReducer.products,
    carts: state.cartReducer.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (product) => dispatch(addToCart(product)),
    handleDeleteCart: (id) => dispatch(deleteToCart(id)),
    handleIncreaseCart: (id) => dispatch(increaseToCart(id)),
    handleDecreaseCart: (id) => dispatch(decreaseToCart(id)),
    handleCheckOut: () => dispatch(checkOutCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
