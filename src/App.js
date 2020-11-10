import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
