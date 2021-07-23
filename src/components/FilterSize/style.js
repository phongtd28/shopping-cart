import styled from "styled-components";
export const FilterSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-top: 30px;
  margin-right: 15px;
  small {
    color: #aaa;
    margin: 20px 0;
  }

  .group-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .btn-star {
      display: flex;
      align-items: center;
      background-color: #eff3f6;
      padding: 4px 18px;
      border: 0.5px solid silver;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
    .btn-count {
      padding: 4px 18px;
      border: 0.5px solid silver;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
    }
  }
`;
