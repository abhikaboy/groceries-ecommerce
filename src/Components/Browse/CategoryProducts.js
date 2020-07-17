import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ItemCard } from "../Home/ItemCard";
import Button from "react-bootstrap/Button";

const axios = require("axios");
export class CategoryProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], previousCategory: "" };
  }

  generateTable = (products) => {
    console.log(products);
    console.log(this.props.category);
    if (products.length > 0) {
      let total = [];
      let rows = [];
      for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        if (i % 4 == 0) {
          console.log(i);
          // ready to start a new row
          rows.push([
            <Col sm={6} xs={12} md={4} lg={3}></Col>,
            <Col sm={6} xs={12} md={4} lg={3}></Col>,
            <Col sm={6} xs={12} md={4} lg={3}></Col>,
            <Col sm={6} xs={12} md={4} lg={3}></Col>,
          ]);
          console.log("adding row!");
        }
        rows[rows.length - 1][i % 4] = (
          <Col sm={6} xs={12} md={4} lg={3}>
            <ItemCard
              price={products[i].price}
              name={products[i].name}
              description={products[i].description}
              size={products[i].pack_size}
              id={products[i].id}
              img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
            />
          </Col>
        );
      }
      for (let i = 0; i < rows.length; i++) {
        console.log(total);
        console.log(rows[i]);
        total.push(<Row>{rows[i]}</Row>);
      }
      console.log("TOTAL!!!");
      return total;
    } else {
      return (
        <Row>
          {" "}
          <h5>No Products Found</h5>
        </Row>
      );
    }
  };
  requestHandle = (res) => {
    if (res.data.result) {
      console.log(res);
      this.setState({ ...this.state, products: res.data.data });
    } else {
      this.setState({ ...this.state, products: [] });
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/product-list",
      params: {
        shop_id: 1,
        subCategoryName: this.props.category,
      },
    })
      .then((res) => {
        this.requestHandle(res);
        return console.log(res);
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    if (this.state.previousCategory != this.props.category) {
      axios({
        method: "get",
        url:
          "http://runmobileapps.com/sales_intig/grocerry_backend/api/product-list",
        params: {
          shop_id: 1,
          subCategoryName: this.props.category,
        },
      }).then((res) => {
        this.requestHandle(res);
        return console.log(res);
      });

      this.setState({ ...this.state, previousCategory: this.props.category });
    }
  }
  render() {
    return <Container>{this.generateTable(this.state.products)}</Container>;
  }
}

export default CategoryProducts;
