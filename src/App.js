import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Checkout } from "./Components/Checkout/Checkout";
import { Browse } from "./Components/Browse/Browse";
import { NotFound } from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Checkout" component={Checkout}></Route>
          <Route path="/Browse" component={Browse}></Route>
          <Route default component={NotFound}></Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
