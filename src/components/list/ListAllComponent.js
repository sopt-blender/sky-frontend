import React from "react";
import styled from "styled-components";
import SmallComponent from "./SmallComponent";

const Container = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin:0 11rem;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
`

const Margin = styled.div`
`

/*
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //그리드 내부의 상대적인 비율을 결정 repeat(반복횟수, 비율)
  justify-content: space-evenly;
  grid-template-columns: 11rem 1fr 1.7rem 1fr 1.7rem 1fr 1.7rem 1fr 1.7rem 1fr 11rem;
*/

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
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
        <SmallComponent/>
      </Container>
    );
};

export default ListAllComponent;
