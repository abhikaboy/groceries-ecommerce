import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem";
export class Cart extends Component {
  render() {
    return (
      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h2>Cart</h2>
        </Row>
        <Row></Row>
        <Row>
          <h4>Diary</h4>
        </Row>
        <Row>
          <CartItem />
        </Row>
        <Row>
          <CartItem />
        </Row>
        <Row>
          <CartItem />
        </Row>
        <Row>
          <h4>Meats</h4>
        </Row>
        <Row>
          <CartItem />
        </Row>
        <Row>
          <h4>Bakery</h4>
        </Row>
        <Row>
          <h4>Fruits & Vegetables</h4>
        </Row>
        <Row>
          <CartItem />
        </Row>
        <Row>
          <CartItem />
        </Row>
        <Row>
          <h4>Snacks</h4>
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

export default Cart;
