import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { setActive } from "../../Actions/setActiveItem";
export class ItemPageOverlayRaw extends Component {
  close = () => {
    this.props.setActive({
      name: "",
      url: "",
      price: "",
      description: "",
      display: false,
    });
  };
  render() {
    let item = this.props.item;
    return (
      <Modal show={this.props.item.display} onHide={this.close}>
        <Modal.Header closeButton>
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
                  <Row>
                    <p>{item.description}</p>
                  </Row>
                  <Row>
                    <h3>{item.price}</h3>
                  </Row>
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
  };
};
export const ItemPageOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPageOverlayRaw);
