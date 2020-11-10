import styled from "styled-components";
// import { Button } from "grommet";

const StyledButtonShadow = styled.button`
  background: #ffffff;
  color: #000000;
  font-weight: bold;
  padding: ${(props) =>
    props.size === "small" ? "0.9rem 2rem" : "1.6rem 10.3rem"};
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonShadowComponent = ({ children, size }) => {
  return <StyledButtonShadow size={size}>{children}</StyledButtonShadow>;
};

export default ButtonShadowComponent;
