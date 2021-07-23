import styled from "styled-components";
export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ececec;
  position: relative;
  padding: 5%;
  box-shadow: -1px 1px 8px 1px #888888;

  .img-cart {
    width: 15%;
    position: relative;
    .img-fluid {
      position: relative;
      max-width: 100%;
    }
  }
  .detail-cart {
    width: 310px;
    padding: 0 10px;
    .title-cart {
      margin-bottom: 0;
    }
    .desc {
      margin-top: 0;
    }
  }
  .action-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    .btn-cart-item {
      cursor: pointer;
      /* width: 20px; */
      /* box-shadow: 0px 1px 2px 0px #888888; */
      &:hover {
        box-shadow: 0px 1px 5px 2px #888888;
      }
    }
    .price-cart {
      font-size: 18px;
      color: red;
      padding: 5px 0;
    }
    .btn-delete {
      text-align: center;
    }
    .group-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      border-radius: 6px;
      .btn-asc {
        margin-right: 3px;
      }
      .btn-desc {
        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;
