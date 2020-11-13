import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
// import ListMyPage from "./pages/list/ListMyPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
