import React from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "../components/common/Header";
import ListAllComponent from "../components/list/ListAllComponent";
import ListMyComponent from "../components/list/ListMyComponent";
import FooterContainer from "../containers/common/FooterContainer";
import ModalContainer from "../containers/modal/ModalContainer";

export default withRouter(({ location: { pathname } }) => {
  return (
    <>
      <Header />
      <Route path={"/list/my-sky"} component={ListMyComponent} />
      <Route path={"/list"} exact component={ListAllComponent} />
      <FooterContainer />
      <ModalContainer />
    </>
  );
});
