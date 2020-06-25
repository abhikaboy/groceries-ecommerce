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
import { Navigation } from "./Components/NavBar/Navigation";
import { Footer } from "./Components/NavBar/Footer";
import { ItemPageOverlay } from "./Components/Browse/ItemPageOverlay";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <ItemPageOverlay />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Checkout" component={Checkout}></Route>
          <Route path="/Browse" component={Browse}></Route>
          <Route default component={NotFound}></Route>
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
