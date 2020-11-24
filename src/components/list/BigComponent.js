import React from "react";
import styled from "styled-components";
import likedIcon from "../../assets/img/like_active/like_active@3x.png";
import unlikedIcon from "../../assets/img/like_unactive/like_unactive@3x.png";

const APPROVED = "승인 완료";
const PENDING = "승인 대기 중";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 14rem;
  display: flex;
  margin-bottom: 8.4rem;
  min-width: 65rem;
`;

const ImageContainer = styled.div`
  align-self: center;
  position: relative;
`;

const LikeButton = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 53rem;
  height: auto;
  color: blue;
  object-fit: cover;
  align-self: center;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
  align-self: left;
`;

const Location = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 1.6rem;
  font-weight: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: black;
`;

const Timestamp = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #a9a9a9;
`;

const ApprovedOrNot = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #717174;
`;

const BigComponent = () => {
  return (
    <Container>
      <ImageContainer>
        <LikeButton src={likedIcon} />
        <Image src="http://placekitten.com/530/372" />
        <Details>
          <Location>
            경기도 수원시 새벽&emsp;<Timestamp>( 2020.08.02 )</Timestamp>
          </Location>
          <ApprovedOrNot>{APPROVED}</ApprovedOrNot>
        </Details>
      </ImageContainer>
    </Container>
  );
};

export default BigComponent;
