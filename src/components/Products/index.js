import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { ProductsWrapper } from "./style";
import { Select } from "antd";

const { Option } = Select;
const Products = ({ products, countProduct, onAddtoCart }) => {
  const [valueSelect, setValueSelect] = useState();

  const onChangSelect = (value) => {
    setValueSelect(value);
  };
  const RenderListProduct = () => {
    switch (valueSelect) {
      case "select":
        return (
          <div className="list-product">
            {[...products].map((product) => (
              <ProductItem product={product} onAddtoCart={onAddtoCart} />
            ))}
          </div>
        );
      case "lowest":
        return (
          <div className="list-product">
            {[...products]
              .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
              .map((product) => (
                <ProductItem product={product} onAddtoCart={onAddtoCart} />
              ))}
          </div>
        );
      case "highest":
        return (
          <div className="list-product">
            {[...products]
              .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
              .map((product) => (
                <ProductItem product={product} onAddtoCart={onAddtoCart} />
              ))}
          </div>
        );
      default:
        return (
          <div className="list-product">
            {[...products].map((product) => (
              <ProductItem product={product} onAddtoCart={onAddtoCart} />
            ))}
          </div>
        );
    }
  };
  return (
    <ProductsWrapper>
      <div className="result-product">
        <div className="">{countProduct} Product(s) found</div>
        <div className="select-product">
          <Select
            defaultValue="select"
            style={{ width: 200 }}
            onChange={onChangSelect}
          >
            <Option value="select">Select</Option>
            <Option value="lowest">Lowest to highest</Option>
            <Option value="highest">Highest to lowest</Option>
          </Select>
        </div>
      </div>
      <RenderListProduct />
    </ProductsWrapper>
  );
};

export default Products;
