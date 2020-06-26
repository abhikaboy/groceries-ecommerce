import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export class Checkout extends Component {
  render() {
    return (
      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h2>Checkout</h2>
        </Row>
        <Row>
          <InputGroup style={{ paddingTop: "2vh" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>First Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl></FormControl>
          </InputGroup>
          <InputGroup style={{ paddingTop: "2vh" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Last Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl></FormControl>
          </InputGroup>
          <InputGroup style={{ paddingTop: "2vh" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Phone Number</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl></FormControl>
          </InputGroup>

          <InputGroup style={{ paddingTop: "2vh" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Address Line 1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl></FormControl>
          </InputGroup>

          <InputGroup style={{ paddingTop: "2vh" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Zip Code</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl></FormControl>
          </InputGroup>

          <InputGroup style={{ paddingTop: "2vh" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>City</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl></FormControl>
          </InputGroup>
        </Row>
      </Container>
    );
  }
}

export default Checkout;
