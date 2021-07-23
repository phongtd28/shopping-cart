import React from "react";
import styled from "styled-components";
import { ButtonWrapper } from "./style";

const Button = ({
  onKeyPress,
  onClick,
  disabled,
  children,
  type,
  isActive,
  style,
  className,
}) => {
  return (
    <ButtonWrapper
      className={className}
      style={style}
      onKeyPress={onKeyPress}
      onClick={onClick}
      disabled={disabled}
      type={type}
      isActive={isActive}
    >
      <span className="btnContent">{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
