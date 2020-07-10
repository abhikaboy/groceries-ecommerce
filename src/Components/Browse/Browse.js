import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ItemCard } from "../Home/ItemCard";
import { AnimatedListItem } from "./AnimatedListItem";
import CategoryProducts from "./CategoryProducts";
import { connect } from "react-redux";
import { setCategories } from "../../Actions/setCategories";

const axios = require("axios");

export class BrowseRaw extends Component {
  componentDidMount() {}
  render() {
    return (
      <Container fluid>
        <Row>
          <div style={{ padding: "3vh" }}></div>
        </Row>
        <Row>
          <InputGroup className="mb-3" style={{ width: "70%", margin: "auto" }}>
            <InputGroup.Prepend>
              <Image
                src="https://static.thenounproject.com/png/101791-200.png"
                style={{
                  width: "40px",
                  height: "100%",
                  backgroundColor: "rgb(200,200,200)",
                  borderColor: "rgb(52,52,52)",
                  borderRadius: "5px",
                  border: "solid",
                  filter: "invert(100%)",
                }}
              />
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search"
            />
            <InputGroup.Append>
              <Button variant="dark">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
        <Row>
          <Col sm={3}>
            <Container fluid>
              <Row>
                <Col style={{ textAlign: "center", color: "black" }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h3>Departments</h3>
                    </ListGroup.Item>
                    {this.props.browse.departments.map((department) => (
                      <AnimatedListItem
                        name={department.name}
                        selected={false}
                        id={department.id}
                      />
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <h2>{this.props.browse.activeDepartment.name}</h2>
              </Row>
              {this.props.browse.categories.map((category) => (
                <Row>
                  <h3>{category.name}</h3>
                  <CategoryProducts category={category.name} />
                </Row>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    browse: state.browse,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setCategories: (categories) => dispatch(setCategories(categories)),
  };
};
export const Browse = connect(mapStateToProps, mapDispatchToProps)(BrowseRaw);
