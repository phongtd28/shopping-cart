import React from "react";

import { ProductItemWrapper } from "./style";
import Button from "../commons/Button";

import { AiOutlineMinus } from "react-icons/ai";

const ProductItem = ({ product, onAddtoCart }) => {
  const payInstallment = product.price / product.installments;
  const price = product.price.toFixed(2);
  return (
    <ProductItemWrapper key={product.id}>
      <span className="image">
        <img className="img-product img-fluid" src={product.src} />
        {product.isFreeShipping ? (
          <span className="isShipping">FreeShip</span>
        ) : (
          ""
        )}
      </span>

      <p className="name-product">{product.title}</p>
      <AiOutlineMinus style={{ color: "red" }} />

      <div className="price">
        <div className="val">
          <small>$ </small>
          <b>{price.slice(0, -3)}</b>
          <span>{price.slice(-3)}</span>
        </div>
        <div className="installment">
          {product.installments ? (
            <span>
              or {product.installments} x <b>${payInstallment.toFixed(2)}</b>
            </span>
          ) : (
            <br />
          )}
        </div>
        <Button
          children="Add To Cart"
          type="add"
          onClick={() => onAddtoCart(product)}
        />
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
