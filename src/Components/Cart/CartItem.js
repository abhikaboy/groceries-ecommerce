import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CartQuantity } from "../Browse/CartQuantity";
import { connect } from "react-redux";
import { setCart } from "../../Actions/setCart";
const axios = require("axios");

class CartItemRaw extends Component {
  remove = () => {
    console.log(this.props.id);
    axios({
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/remove-cart-items",
      params: {
        product_id: this.props.id,
        products: [this.props.id],
        shop_id: 1,
      },
    })
      .then((res) => this.updateCart())
      .catch((err) => console.log(err));
  };
  updateCart = () => {
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
  };
  render() {
    return (
      <Row style={{ width: "100%", paddingBottom: "2vh" }}>
        <Container
          fluid
          style={{
            border: "solid",
            borderRadius: "10px",
            borderColor: "rgba(70,70,70,0.2)",
            paddingTop: "1vh",
            paddingBottom: "1vh",
          }}
        >
          <Row style={{ margin: "auto" }}>
            <Col>
              <Image
                src="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                style={{ width: "120px", height: "120px" }}
                thumbnail
              />
            </Col>
            <Col sm={8}>
              <h3 style={{ paddingTop: "10px", marginBottom: "0px" }}>
                {this.props.name}
              </h3>
              <p
                style={{
                  marginTop: "0px",
                  paddingTop: "0px",
                  marginBottom: "0px",
                }}
              >
                In Stock
              </p>
              <p>{this.props.description}</p>
            </Col>
            <Col
              style={{
                color: "black",
                margin: "auto",
                borderLeft: "solid",
                borderColor: "rgba(70,70,70,0.2)",
              }}
            >
              <p
                style={{ padding: "15px", margin: "auto", textAlign: "center" }}
              >
                {this.props.total}
              </p>
              <CartQuantity
                style={{
                  margin: "auto",
                }}
                quantity={this.props.quantity}
              />
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="danger"
                  style={{ textAlign: "center", margin: "auto" }}
                  onClick={this.remove}
                >
                  Remove
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
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

export const CartItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItemRaw);
