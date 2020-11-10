import styled from "styled-components";
// import { Button } from "grommet";

const StyledButtonLine = styled.button`
  background: #ffffff;
  color: #000000;
  font-weight: bold;
  padding: ${(props) =>
    props.size === "small" ? "0.7rem 2rem" : "0.7rem 3rem"};
  border: solid 1px #ebebeb;
  border-radius: 40px;
  &:hover {
    background: #000000;
    color: #ffffff;
    box-shadow: none;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonLineComponent = ({ children, size }) => {
  return <StyledButtonLine size={size}>{children}</StyledButtonLine>;
};

export default ButtonLineComponent;
