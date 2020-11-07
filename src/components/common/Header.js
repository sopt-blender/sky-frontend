import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  padding: 20rem 14rem 10rem 14rem;
  justify-content: space-between;
  font-family: "SpoqaHanSans";
`;

const TabContainer = styled(Link)`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

const TabElem = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) =>
    props.current
      ? "#000000"
      : "#d8d8d8"}; // 컬러 값을 raw말고 이름으로 불러올 수 있게 나중에 수정 필요
`;

const LoginContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: end;
`;

const LoginElem = styled(Link)`
  font-family: inherit;
  font-size: 3rem;
  font-weight: bold;
  margin-right: 8rem;
  color: #d8d8d8; // 컬러 값을 raw말고 이름으로 불러올 수 있게 나중에 수정 필요
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <TabContainer>
      <TabElem current={pathname === ("/list/" || "/list")}>All</TabElem>
      <TabElem current={pathname.includes("/my-sky")}>My Sky</TabElem>
      <TabElem current={pathname.includes("/liked-sky")}>Liked Sky</TabElem>
    </TabContainer>
    <LoginContainer>
      <LoginElem>Login</LoginElem>
      <LoginElem>Admin</LoginElem>
    </LoginContainer>
  </Header>
));
