import React, { useState } from "react";
import { SizeWrapper } from "./style";

const ButtonSize = ({ onKeyPress, onClick, disabled, name, type }) => {
  const [isActive, setIsActive] = useState(false);
  // const isActive = currentSize.includes(children);
  // console.log(isActive, "btnSize");
  // useEffect(() => {
  //   const  isActive = currentSize.includes(children);
  // }, [currentSize]);
  return (
    <SizeWrapper
      name={name}
      onKeyPress={onKeyPress}
      onClick={() => {
        onClick(name);
        setIsActive(!isActive);
      }}
      disabled={disabled}
      type={type}
      isActive={isActive}
    >
      <span className="btnContent">{name}</span>
    </SizeWrapper>
  );
};

export default ButtonSize;
