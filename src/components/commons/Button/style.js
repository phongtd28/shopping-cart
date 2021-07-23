import styled from "styled-components";

const renderBackgroundColor = (props) => {
  const { isActive, type } = props;

  switch (type) {
    case "add":
      return "silver";
    case "primary":
      return "#1890ff";
    case "text,link,dashed":
      return "#fff";
    default:
      return "#fff";
  }
};
const renderBorder = (props) => {
  const { isActive, type } = props;

  switch (type) {
    case "add":
      return "black";
    case "primary":
      return "#1890ff";
    case "text,link":
      return "#fff";
    case "dashed":
      return "0.5px dashed silver";
    default:
      return "0.5px solid";
  }
};
const renderColor = (props) => {
  const { isActive, type } = props;

  switch (type) {
    case "add":
    case "primary":
      return "#fff";
    case "text,dashed":
      return "black";
    case "link":
      return "#1890ff";
    default:
      return "black";
  }
};

export const ButtonWrapper = styled.button`
  font-weight: 500;
  font-size: 14px;
  padding: 10px 50px;
  margin: 1px;
  border-radius: 2px;
  cursor: pointer;

  background-color: ${(props) => renderBackgroundColor(props)};
  color: ${(props) => renderColor(props)};
  border: ${(props) => renderBorder(props)};

  &:hover {
    /* opacity: 0.5; */
    background-color: yellow;
    color: black;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #d9d9d9;
  }
`;
