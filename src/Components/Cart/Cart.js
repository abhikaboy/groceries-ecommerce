import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CartItem } from "./CartItem";
import { connect } from "react-redux";
import { setCart } from "../../Actions/setCart";
const axios = require("axios");

export class CartRaw extends Component {
  componentDidMount() {
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
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/remove-cart-items",
      params: {
        shop_id: 1,
        clear_all: [1],
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  createItems = (department) => {
    let items = this.props.cart.cart_items;
    console.log("items");
    console.log(items);
    let filtered = items.filter(
      (item) =>
        item.department_name == department.name ||
        item.category == department.name
    );
    let elements = filtered.map((item) => (
      <Row>
        <CartItem
          name={item.product_name}
          description={item.product_description}
          price={item.per_unit_price}
          total={item.total_cost}
          quantity={item.quantity}
          id={item.product_id}
        />
      </Row>
    ));
    if (filtered.length > 0) {
      elements.unshift(<h4>{department.name}</h4>);
    }
    return elements;
  };
  render() {
    return (
      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h2>Cart</h2>
        </Row>
        {this.props.browse.departments.map((department) =>
          this.createItems(department)
        )}
        <Row style={center}>
          <Col>
            <h3>Items: {this.props.cart.total_cart_items}</h3>
          </Col>
        </Row>
        <Row style={center}>
          <Col>
            <h3>Subtotal: {this.props.cart.total_cart_cost}</h3>
          </Col>
        </Row>
        <Row>
          <Button
            style={{
              textAlign: "center",
              width: "100%",
              padding: "1.5vh",
              marginTop: "2vh",
              marginBottom: "2vh",
            }}
            href="/checkout"
          >
            Go To Checkout
          </Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    browse: state.browse,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setCart: (cart) => dispatch(setCart(cart)),
  };
};
const center = {
  textAlign: "center",
  width: "100%",
  padding: "10px",
  margin: "auto",
};
export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartRaw);
