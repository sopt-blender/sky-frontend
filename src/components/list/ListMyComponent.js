import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 14rem;
  display: flex;
  margin-bottom: 8.4rem;
  min-width: 65rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  color: blue;
  object-fit: cover;
  margin: 0 auto;
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
      <Image src="http://placekitten.com/530/372" />
    </Container>
  );
};

export default ListMyComponent;
