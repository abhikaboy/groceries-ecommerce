import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { setQuantity } from "../../Actions/setQuantity";
import { connect } from "react-redux";

const axios = require("axios");
export class CartQuantityRaw extends Component {
  add = () => {
    // this.props.setQuantity(this.props.item.quantity + 1);
    axios({
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/add-to-cart",
      params: {
        product_id: this.props.id,
        products: [this.props.id, this.props.id, this.props.id, this.props.id],
        shop_id: 1,
        qty: [this.props.quantity + 1],
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  add = () => {
    // this.props.setQuantity(this.props.item.quantity + 1);
    axios({
      method: "post",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/add-to-cart",
      params: {
        product_id: this.props.id,
        products: [this.props.id],
        shop_id: 1,
        qty: [this.props.quantity - 1],
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="success" onClick={this.sub}>
            -
          </Button>
        </InputGroup.Prepend>
        <FormControl aria-label="1" value={this.props.quantity} />
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
export const CartQuantity = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartQuantityRaw);
