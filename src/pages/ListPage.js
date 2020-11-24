import React from "react";
import { Route, withRouter } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ListAllComponent from "../components/list/ListAllComponent";
import ListMyComponent from "../components/list/ListMyComponent";
import ListLikedComponent from "../components/list/ListLikedComponent";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Header />
      <Route path={"/list/my-sky"} component={ListMyComponent} />
      <Route path={"/list/liked-sky"} exact component={ListLikedComponent} />
      <Route path={"/list"} exact component={ListAllComponent} />
      <Footer />
    </>
  );
};
