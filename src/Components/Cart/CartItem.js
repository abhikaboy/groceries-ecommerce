import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Quantity } from "../Browse/Quantity";

export default class CartItem extends Component {
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
              <h3 style={{ paddingTop: "10px", marginBottom: "0px" }}>Apple</h3>
              <p
                style={{
                  marginTop: "0px",
                  paddingTop: "0px",
                  marginBottom: "0px",
                }}
              >
                In Stock
              </p>
              <p>This is the item description</p>
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
                $12.00
              </p>
              <Quantity
                style={{
                  margin: "auto",
                }}
              />
              <Button
                variant="danger"
                style={{ textAlign: "center", margin: "auto" }}
              >
                x
              </Button>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}
