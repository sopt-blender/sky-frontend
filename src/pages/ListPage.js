import React from "react";
import { Route, withRouter } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ListAllContainer from "../containers/list/ListAllContainer";
import ListMyContainer from "../containers/list/listMyContainer";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Header />
      <Route path={"/list/my-sky"} component={ListMyContainer} />
      <Route path={"/list"} exact component={ListAllContainer} />
      <Footer />
    </>
  );
};
