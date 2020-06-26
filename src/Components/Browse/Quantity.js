import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export class Quantity extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="success">-</Button>
        </InputGroup.Prepend>
        <FormControl aria-label="1" value={1} />
        <InputGroup.Append>
          <Button variant="success">+</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default Quantity;
