import React from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  /* position:relative;
  height:100%;
  margin:0;
  padding:0; */
`;

const ResponsiveTemplate = ({ children }) => {
  return <StyledTemplate>{children}</StyledTemplate>;
};

export default ResponsiveTemplate;
