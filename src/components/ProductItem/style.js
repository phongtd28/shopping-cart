import styled from "styled-components";
export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 25%;
  text-align: center;
  &:hover {
    border: 0.5px solid silver;
    box-shadow: -1px 1px 8px 1px #888888;
  }
  .image {
    position: relative;
    .img-product {
      width: 100%;
    }
    .isShipping {
      background-color: darkslategray;
      color: #fff;
      padding: 4px 8px;
      border-radius: 3px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 3;
    }
  }

  .name-product {
    height: 45px;
    padding: 0 20px;
    margin: 15px 0;
  }
  .price {
    .val {
      b {
        font-size: 1.5em;
      }
    }
    .installment {
      padding: 10px;
      color: #9c9b9b;
      b {
        font-size: 1.15em;
      }
    }
  }
`;
