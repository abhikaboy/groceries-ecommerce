import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { setQuantity } from "../../Actions/setQuantity";
import { connect } from "react-redux";

export class QuantityRaw extends Component {
  add = () => {
    this.props.setQuantity(this.props.item.quantity + 1);
  };
  sub = () => {
    this.props.setQuantity(this.props.item.quantity - 1);
  };
  getValue = () => {};
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="success" onClick={this.sub}>
            -
          </Button>
        </InputGroup.Prepend>
        <FormControl aria-label="1" value={this.props.item.quantity} />
        <InputGroup.Append>
          <Button variant="success" onClick={this.add}>
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
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
    setQuantity: (num) => dispatch(setQuantity(num)),
  };
};
export const Quantity = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuantityRaw);
