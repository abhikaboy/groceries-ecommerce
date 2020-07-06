import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Quantity } from "./Quantity";
import { connect } from "react-redux";
import { setActive } from "../../Actions/setActiveItem";
import { setQuantity } from "../../Actions/setQuantity";
export class ItemPageOverlayRaw extends Component {
  close = () => {
    this.props.setActive({
      name: "",
      url: "",
      price: "",
      description: "",
      display: false,
      quantity: 0,
    });
  };
  getTotal = () => {
    return NaN;
  };
  render() {
    let item = this.props.item;
    return (
      <Modal show={this.props.item.display} onHide={this.close}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title style={{ textAlign: "center" }}>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col>
                <Image src={item.url} thumbnail></Image>
              </Col>
              <Col>
                <Container style={{ textAlign: "center" }}>
                  <Row style={{ textAlign: "center" }}>
                    <Col>
                      <p>{item.description}</p>
                    </Col>
                  </Row>
                  <Row style={{ textAlign: "center" }}>
                    <Col>
                      <h3>{item.price}</h3>
                    </Col>
                  </Row>
                  <Row style={{ textAlign: "center" }}>
                    <Quantity />
                  </Row>
                  <Row>Subtotal: {this.getTotal()}</Row>
                </Container>
              </Col>
            </Row>
            <Row>
              <Col sm={7}></Col>
              <Col>
                <Button variant="success">Add to Cart</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setActive: (data) => dispatch(setActive(data)),
    setQuantity: (num) => dispatch(setQuantity(num)),
  };
};
export const ItemPageOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPageOverlayRaw);
