/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const activeStyle = {
  borderRadius: "50px",
  boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  color: "#000000",
};

const Header = styled.header`
  width: 100%;
  min-width: 65rem;
  padding: 6rem 11rem;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  font-family: "AppleSDGothicNeo";
  align-content: stretch;
`;

const TabContainer = styled.div`
  /* width: 25%; */
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
`;

const TabElem = styled(NavLink)`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.9rem 2rem 0.7rem;
  object-fit: contain;
  color: #a9a9a9;
  text-decoration: none;
  /* white-space: nowrap; */
`;

const LoginContainer = styled.div`
  /* width: 15%; */
  display: flex;
  align-self: flex-end;
  justify-content: end;
  margin-left: auto;
`;

const Login = styled(NavLink)`
  padding: 0.9rem 2rem 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: left;
  margin: 0 1rem;
  text-decoration: none;
`;

const AdminLogin = styled(Link)`
  padding: 0.9rem 2rem 0.7rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #a9a9a9;
  text-decoration: none;
`;

export default () => (
  // export default () => (
  <Header>
    <TabContainer>
      <TabElem exact to="/list" activeStyle={activeStyle}>다른 사람이 본 하늘</TabElem>
      <TabElem to="/list/my-sky" activeStyle={activeStyle}>
        내가 본 하늘
      </TabElem>
      <TabElem to="/">다시 보고싶은 하늘</TabElem>
    </TabContainer>
    <LoginContainer>
      <Login to="/">Login</Login>
      <AdminLogin to="/">Admin</AdminLogin>
    </LoginContainer>
  </Header>
);