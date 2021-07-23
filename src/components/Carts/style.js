import styled from "styled-components";

const renderShowCart = (props) => {
  const { isShowCart } = props;
  if (isShowCart) return "flex";
  else return "none";
};
export const CartsWrapper = styled.div`
  display: ${(props) => renderShowCart(props)};
  position: relative;
  .esc-cart {
    cursor: pointer;
    position: fixed;
    z-index: 6;
    right: 450px;
    &:hover {
      box-shadow: -1px 1px 8px 1px #888888;
    }
  }

  .cart {
    background-color: #ececec;
    position: fixed;
    z-index: 4;
    right: 0;
    width: 450px;
    height: 100%;
    overflow-y: scroll;
    box-shadow: 4px -20px 20px 17px #888888;

    .header-cart {
      background-color: black;
      /* opacity: 0.6; */
      text-align: center;
      color: darkslategray;
      padding: 25px;
      width: 450px;
      position: fixed;
      top: 0;
      z-index: 5;
      box-shadow: -20px -4px 20px 9px silver;
      /* .cart-number {
        padding: 5px;
        color: yellow;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        left: 225px;
        bottom: 55px;
      } */
    }
    .list-cart {
      display: flex;
      flex-direction: column;

      min-height: 280px;
      padding-top: 123px;
      padding-bottom: 200px;
    }
    .footer-cart {
      position: fixed;
      bottom: 0;
      height: 200px;
      width: 450px;
      padding: 20px 5px;
      background-color: black;
      color: darkslategray;
      display: flex;
      flex-direction: column;
      .btn-checkout {
        &:hover {
          background-color: red;
        }
      }
      .sub {
        display: flex;
        justify-content: space-between;
        .sub-title {
          color: darkslategray;
        }
        .sub-price {
          text-align: right;
        }
      }
    }
  }
`;
