import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export class CheckoutRaw extends Component {
  render() {
    return (
      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h2>Checkout</h2>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col sm={7}>
                <Container fluid>
                  <Row style={{ marginBottom: "0px" }}>
                    <p>Shipping Method</p>
                  </Row>
                  <Row style={{ marginTop: "0px", width: "100%" }}>
                    <DropdownButton
                      title="Pickup"
                      style={{ width: "100%" }}
                      id="dropdown-basic"
                    >
                      <Dropdown.Item
                        eventKey="1"
                        onClick={this.select}
                        option="Instore Pickup"
                      >
                        Instore Pickup
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="2"
                        onClick={this.select}
                        option="Delivery"
                      >
                        Delivery
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="3"
                        onClick={this.select}
                        option="Crubside Pickup"
                      >
                        Curbside Pickup
                      </Dropdown.Item>
                    </DropdownButton>
                  </Row>
                </Container>
                <Container>
                  <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    <h5>Shipping Info</h5>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup style={{ paddingTop: "2vh" }}>
                        <FormControl placeholder="First Name"></FormControl>
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup style={{ paddingTop: "2vh" }}>
                        <FormControl placeholder="Last Name"></FormControl>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup style={{ paddingTop: "2vh" }}>
                        <FormControl placeholder="Phone Number"></FormControl>
                      </InputGroup>
                    </Col>
                  </Row>
                  <InputGroup style={{ paddingTop: "2vh" }}>
                    <FormControl placeholder="Address Line 1"></FormControl>
                  </InputGroup>
                  <InputGroup style={{ paddingTop: "2vh" }}>
                    <FormControl placeholder="Address Line 2 (optional)"></FormControl>
                  </InputGroup>
                  <InputGroup style={{ paddingTop: "2vh" }}>
                    <FormControl placeholder="Zip Code"></FormControl>
                  </InputGroup>
                  <InputGroup style={{ paddingTop: "2vh" }}>
                    <FormControl placeholder="City"></FormControl>
                  </InputGroup>
                </Container>
                <Container>
                  <Row style={{ paddingTop: "5vh", paddingBottom: "5px" }}>
                    <h5>Payment Information</h5>
                  </Row>
                  <Row>
                    <Container>
                      <Row style={{ paddingTop: "2vh", paddingBottom: "2vh" }}>
                        <Col sm={10}>
                          <FormControl placeholder="Card Number"></FormControl>
                        </Col>
                        <Col>
                          <FormControl placeholder="CVC"></FormControl>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ opacity: "50%" }}>
                          <p>Expiration Date</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormControl placeholder="Month"></FormControl>
                        </Col>
                        <Col>
                          <FormControl placeholder="Year"></FormControl>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </Container>
              </Col>
              <Col>
                <Container
                  style={{
                    backgroundColor: "rgb(250,250,250)",
                    borderColor: "rgb(220,220,220)",
                    borderStyle: "solid",
                    borderRadius: "5px",
                  }}
                >
                  <Row style={{ padding: "3vh" }}>
                    <Col style={{ textAlign: "center" }}>
                      <h5>Order Summary</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Table responsive style={{ textAlign: "center" }}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>#</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.cart.cart_items.map((cartItem) => (
                          <tr>
                            <td>{cartItem.product_name}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.total_cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ textAlign: "right", paddingRight: "2vw" }}>
                        <p style={{ padding: "0px" }}>
                          Subtotal: ${this.props.cart.total_cart_cost}
                        </p>
                        <p style={{ padding: "0px" }}>
                          Delivery: ${this.props.cart.delivery_fees}
                        </p>
                        <p style={{ padding: "0px" }}>
                          Convience: ${this.props.cart.convenience_fees}
                        </p>
                        <p style={{ padding: "0px" }}>
                          Tax: ${this.props.cart.sales_tax}
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ textAlign: "center", margin: "auto" }}>
                    <Col>
                      <h5>Total: ${this.props.cart.cart_grand_total}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <FormControl
                      placeholder="Promotional Code"
                      style={{
                        width: "70%",
                        textAlign: "center",
                        margin: "auto",
                      }}
                    ></FormControl>
                  </Row>
                  <Row style={{ padding: "2vh" }}></Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row style={{ padding: "5vh" }}></Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {};
};
export const Checkout = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutRaw);
