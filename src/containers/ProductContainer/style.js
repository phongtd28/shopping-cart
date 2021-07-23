import styled from "styled-components";
export const ProductContainerWrapper = styled.div`
  display: flex;

  .icon-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    position: fixed;
    right: 0;
    top: 0;
    width: 60px;
    height: 60px;
    background-color: #aaa;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: yellow;
    }
    /* .cart-number {
      padding: 5px;
      color: yellow;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      left: 28px;
      bottom: 33px;
    } */
  }
`;
