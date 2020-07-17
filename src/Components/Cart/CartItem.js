import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CartQuantity } from "../Browse/CartQuantity";
import { connect } from "react-redux";
import { setCart } from "../../Actions/setCart";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
const axios = require("axios");

class CartItemRaw extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  remove = () => {
    this.setState({ active: false });
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
    /*
              <CSSTransition
            in={this.state.addCartAnimation}
            timeout={300}
            classNames="addedToCart"
            unmountOnExit
          >
            <div
              style={{
                position: "absolute",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.8)",
                paddingTop: "70%",
                height: "100%",
                width: "100%",
                zIndex: "10",
              }}
            >
              <div
                style={{
                  width: "70%",
                  textAlign: "center",
                  margin: "auto",
                  color: "black",
                }}
              >
                <h5>Added To Cart!</h5>
              </div>
            </div>
          </CSSTransition>
    */
    return (
      <CSSTransition
        in={this.state.active}
        timeout={500}
        classNames="itemTransition"
      >
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
                <h3
                  style={{
                    paddingTop: "10px",
                    marginBottom: "0px",
                    fontFamily: "Raleway",
                  }}
                >
                  {this.props.name}
                </h3>
                <p
                  style={{
                    marginTop: "0px",
                    paddingTop: "0px",
                    marginBottom: "0px",

                    fontFamily: "Roboto",
                  }}
                >
                  In Stock
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  {this.props.description}
                </p>
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
                  style={{
                    padding: "15px",
                    margin: "auto",
                    textAlign: "center",
                    fontFamily: "Roboto",
                  }}
                >
                  {this.props.total}
                </p>
                <CartQuantity
                  style={{
                    margin: "auto",
                    fontFamily: "Roboto",
                  }}
                  quantity={this.props.quantity}
                />
                <div style={{ textAlign: "center" }}>
                  <Button
                    variant="danger"
                    style={{
                      textAlign: "center",
                      margin: "auto",
                      fontFamily: "Roboto",
                    }}
                    onClick={this.remove}
                  >
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </CSSTransition>
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
