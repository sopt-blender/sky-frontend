import React from "react";
import styled from "styled-components";
import SmallComponent from "./SmallComponent";

const Container = styled.div`
width: 100%;
min-width: 65rem;
padding: 0 9rem;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const ListAllComponent = () => {
  return (
      <Container>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
      </Container>
    );
};

export default ListAllComponent;
