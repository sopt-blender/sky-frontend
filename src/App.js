import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
// import ListMyPage from "./pages/list/ListMyPage";

const App = () => {
  return (
    <>
      <Route component={MainPage} path={["/"]} exact />
      <Route component={ListPage} path="/list" />
    </>
  );
};

export default App;
