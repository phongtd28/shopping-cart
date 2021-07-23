import React from "react";
import { CountCartWrapper } from "./style";

const CountCart = ({ countCart, style }) => {
  const count = `0${countCart}`.slice(-2);
  return <CountCartWrapper style={style}>{count}</CountCartWrapper>;
};

export default CountCart;
