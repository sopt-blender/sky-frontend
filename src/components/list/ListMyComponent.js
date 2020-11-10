import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 14rem;
  display: flex;
  height: 45.5rem;
  margin-bottom: 8.4rem;
`;

const Image = styled.img`
  background-color: red;
  color: blue;
  margin-right: 11.6rem;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.7rem;
`;

const OptionElem = styled.span`
  font-family: inherit;
  font-weight: bold;
  text-align: left;
  font-size: 3rem;
`;

const ListMyComponent = () => {
  return (
    <Container>
      <Image src="http://placekitten.com/810/455" />
      <Options>
        <OptionElem>최신 순 정렬</OptionElem>
        <OptionElem>승인 여부</OptionElem>
        <OptionElem>좋아요</OptionElem>
      </Options>
    </Container>
  );
};

export default ListMyComponent;
