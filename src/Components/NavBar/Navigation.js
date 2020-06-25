import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { AnimationWrapper } from "react-hover-animation";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Container style={containerStyle} fluid justify>
          <Row>
            <Col>
              <Image
                style={imageStyle}
                src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar bg="dark" variant="dark" style={center}>
                <Nav className="mr-auto center" style={center}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="browse">Shop By Department</Nav.Link>
                  <Nav.Link href="pricing">Deals</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
            <div style={{ position: "absolute", marginLeft: "92.5%" }}>
              <Image
                src="https://static.thenounproject.com/png/101791-200.png"
                icon
                style={{ width: "30px", height: "30px" }}
              />
              <Image
                src="https://static.thenounproject.com/png/3134331-200.png"
                icon
                style={{ width: "30px", height: "30px" }}
              />
              <Image
                src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png"
                icon
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
const containerStyle = {
  textAlign: "center",
  backgroundColor: "#343a40",
  //backgroundColor: "rgb(100,200,100)",
};
const center = {
  textAlign: "center",
  margin: "auto",
  textColor: "white",
};
const imageStyle = {
  width: "240px",
  height: "80px",
  textAlign: "center",
};
export default Navigation;
