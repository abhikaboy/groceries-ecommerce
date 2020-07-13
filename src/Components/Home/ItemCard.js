import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";
import { AnimationWrapper } from "react-hover-animation";
import { setActive } from "../../Actions/setActiveItem";
import { Quantity } from "../Browse/Quantity";
import { setQuantity } from "../../Actions/setQuantity";
import { setCart } from "../../Actions/setCart";

import { CSSTransition } from "react-transition-group";
import "./styles.css";
const axios = require("axios");

export class ItemCardRaw extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  afterAdd = (res) => {
    this.props.setQuantity(1);
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
    console.log(res);
  };
  addCart = () => {
    axios({
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/add-to-cart",
      params: {
        product_id: this.props.id,
        products: [this.props.id],
        shop_id: 1,
        qty: [this.props.item.quantity],
      },
    })
      .then((res) => this.afterAdd(res))
      .catch((err) => console.log(err));
    console.log(this.props.id);
  };
  clickFunc = () => {
    // this.props.setActive({
    //   name: this.props.name,
    //   url: this.props.img,
    //   price: this.props.price,
    //   description: "this is the description",
    //   display: true,
    // });
  };
  mouseOver = () => {
    this.setState({ hovered: true });
  };
  mouseOut = () => {
    this.setState({ hovered: false });
    this.props.setQuantity(1);
  };
  checkCart = () => {
    let filtered = this.props.cart.cart_items.filter(
      (cartItem) => cartItem.product_id == this.props.id
    );
    if (filtered.length > 0) {
      return (
        <h6 style={{ backgroundColor: "rgba(0,255,0,0.2)" }}>Item In Cart</h6>
      );
    } else {
      return <div></div>;
    }
  };
  render() {
    return (
      <AnimationWrapper
        reset
        config={{
          transform: {
            initial: "scale(1,1)",
            onHover: "scale(1.05,1.05)",
          },
          backgroundColor: {
            initial: "rgba(255,255,255,0)",
            onHover: "rgba(255,255,255,0)",
          },
        }}
      >
        <Card
          border="secondary"
          style={{ width: "100%" }}
          class="card"
          onClick={this.clickFunc}
          onPointerEnter={this.mouseOver}
          onPointerLeave={this.mouseOut}
        >
          <CSSTransition
            in={this.state.hovered}
            timeout={300}
            classNames="itemTransition"
            unmountOnExit
          >
            <div
              style={{
                position: "absolute",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "rgba(52,255,52,0.3)",

                //backgroundColor: "rgba(255,255,52,0.3)",
                //backgroundColor: "rgba(0,0,0,0.5)",
                paddingTop: "50%",
                height: "100%",
                width: "100%",
                zIndex: "5",
              }}
            >
              <div
                style={{ width: "70%", textAlign: "center", margin: "auto" }}
              >
                <Quantity />
              </div>
              <Button onClick={this.addCart}>Add To Cart</Button>
            </div>
          </CSSTransition>
          <Card.Img
            variant="top"
            style={{ width: "80%", margin: "auto" }}
            src={this.props.img}
          ></Card.Img>
          <Card.Body>
            <ListGroup variant="flush" style={center}>
              <ListGroup.Item>{this.props.name}</ListGroup.Item>
              <ListGroup.Item>{this.props.description}</ListGroup.Item>
              <ListGroup.Item style={{ color: "rgb(50,200,50)" }}>
                In Stock
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer style={center}>
            {this.checkCart()}
            <br></br>
            {this.props.price}
          </Card.Footer>
        </Card>
      </AnimationWrapper>
    );
  }
}
const center = {
  textAlign: "center",
  width: "100%",
  padding: "10px",
  fontFamily: "Raleway",
};
const mapStateToProps = (state) => {
  return {
    item: state.item,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setActive: (data) => dispatch(setActive(data)),
    setQuantity: (num) => dispatch(setQuantity(num)),
    setCart: (cart) => dispatch(setCart(cart)),
  };
};

export const ItemCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCardRaw);
