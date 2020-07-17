import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
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
import { setDepartments } from "./Actions/setDepartments";
import { setCategories } from "./Actions/setCategories";
import { setCart } from "./Actions/setCart";
import { setFrequentlyBought } from "./Actions/setFrequentlyBought";
import { setRecentlyBought } from "./Actions/setRecentlyBought";
const axios = require("axios");
//const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class AppRaw extends Component {
  // setting defaults
  componentDidMount() {
    axios({
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/product-list",
      params: {
        shop_id: 1,
        get_mostly_baught: 1,
      },
    })
      .then((res) => this.props.setFrequentlyBought(res.data))
      .catch((err) => console.log(err));
    axios({
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/product-list",
      params: {
        shop_id: 1,
        get_recently_baught: 1,
      },
    })
      .then((res) => this.props.setRecentlyBought(res.data))
      .catch((err) => console.log(err));
    axios({
      method: "post",
      url:
        "https://runmobileapps.com/sales_intig/grocerry_backend/api/cart-items-list?shop_id=1",
      params: {
        shop_id: 1,
      },
    })
      .then((res) => this.props.setCart(res.data))
      .catch((err) => console.log(err));
    axios({
      method: "get",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/department-list",
      params: {
        shop_id: 1,
      },
    })
      .then((res) => {
        this.props.setDepartments(res.data.department_list);
        return res.data.department_list;
      })
      .then((res) =>
        axios({
          method: "get",
          url:
            "http://runmobileapps.com/sales_intig/grocerry_backend/api/category-list",
          params: {
            shop_id: 1,
            depertmentname: res[0].name,
          },
        })
          .then((res) => this.props.setCategories(res.data.category_list))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }
  render() {
    // this.props.setDepartments();
    return (
      <Router>
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
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    browse: state.browse,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setDepartments: (departments) => dispatch(setDepartments(departments)),
    setCategories: (categories) => dispatch(setCategories(categories)),
    setCart: (cart) => dispatch(setCart(cart)),
    setFrequentlyBought: (products) => dispatch(setFrequentlyBought(products)),
    setRecentlyBought: (products) => dispatch(setRecentlyBought(products)),
  };
};
export const App = connect(mapStateToProps, mapDispatchToProps)(AppRaw);
