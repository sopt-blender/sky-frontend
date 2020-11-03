import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TabElem = styled.div`
  border: 1px solid black;
  background-color: ${(props) => (props.current ? "red" : "white")};
`;

const LoginContainer = styled.div`
  display: flex;
`;

const LoginButton = styled.button``;

const AdminLoginButton = styled.button``;

export default withRouter(({ location: { pathname } }) => (
  <>
    <Header>
      <TabContainer>
        <TabElem current={pathname === ("/list/" || "/list")}>All</TabElem>
        <TabElem current={pathname.includes("/my-sky")}>My Sky</TabElem>
        <TabElem current={pathname.includes("/liked-sky")}>Liked Sky</TabElem>
      </TabContainer>
      <LoginContainer>
        <LoginButton>Login</LoginButton>
        <AdminLoginButton>Admin</AdminLoginButton>
      </LoginContainer>
    </Header>
  </>
));
