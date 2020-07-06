import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Login/Register";
import { Checkout } from "./Components/Checkout/Checkout";
import { Cart } from "./Components/Cart/Cart";
import { Browse } from "./Components/Browse/Browse";
import { NotFound } from "./Components/NotFound/NotFound";
import { Navigation } from "./Components/NavBar/Navigation";
import { Footer } from "./Components/NavBar/Footer";
import { ItemPageOverlay } from "./Components/Browse/ItemPageOverlay";
import { SearchOverlay } from "./Components/NavBar/SearchOverlay";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ItemPageOverlay />
        <SearchOverlay />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Checkout" component={Checkout}></Route>
          <Route path="/Browse" component={Browse}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route default component={NotFound}></Route>
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
