import styled from "styled-components";

const renderBackgroundColor = (props) => {
  const { isActive } = props;
  if (isActive) return "black";
  else return "#ececec";
};
const renderColor = (props) => {
  const { isActive } = props;
  if (isActive) return "#fff";
  else return "black";
};
const renderHoverBorder = (props) => {
  const { isActive } = props;
  if (1) return "0.5px solid silver";
  else return "0.5px solid black";
};
export const SizeWrapper = styled.button`
  background-color: ${(props) => renderBackgroundColor(props)};
  color: ${(props) => renderColor(props)};
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 2px;
  &:hover {
    border: ${(props) => renderHoverBorder(props)};
  }
  .btn-content {
    /* display: block; */
    /* border-radius: 50%; */
  }
`;
