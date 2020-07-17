import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropdownButton from "react-bootstrap/DropdownButton";
import Accordion from "react-bootstrap/Accordion";
import { ItemCard } from "../Home/ItemCard";
import { AnimatedListItem } from "./AnimatedListItem";
import CategoryProducts from "./CategoryProducts";
import { connect } from "react-redux";
import { setCategories } from "../../Actions/setCategories";
import { setActiveCategory } from "../../Actions/setActiveCategory";
import { AnimationWrapper } from "react-hover-animation";

const axios = require("axios");

export class BrowseRaw extends Component {
  componentDidMount() {}
  selectCategory = (e) => {
    let category = e.currentTarget.attributes["category"].value;
    console.log(category);
    this.props.setActiveCategory(category);
  };
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
                    <Accordion>
                      {this.props.browse.departments.map((department) => (
                        <AnimatedListItem
                          name={department.name}
                          selected={false}
                          id={department.id}
                        />
                      ))}
                    </Accordion>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid justify>
              <Row>
                <Col>
                  <h2 style={{ textAlign: "center" }}>
                    {this.props.browse.activeDepartment.name}
                  </h2>
                </Col>
              </Row>
              <Row style={{ textAlign: "center", marginBottom: "5vh" }}>
                <Container>
                  <Row
                    style={{
                      borderRadius: "1vh",
                      borderColor: "rgb(20,20,20)",
                      borderWidth: "0.2vh",
                      borderStyle: "solid",
                      backgroundColor: "rgb(52, 58, 64)",
                      color: "white",
                      padding: "2vh",
                      fontFamily: "raleway",
                    }}
                  >
                    <Col xs={12} sm={12} md={12}>
                      {" "}
                      <h5>Categories</h5>{" "}
                    </Col>
                    {this.props.browse.categories.map((category) => (
                      <Col xs={6} sm={4} md={2} style={{ textAlign: "center" }}>
                        <AnimationWrapper
                          config={{
                            transform: {
                              initial: "scale(1,1)",
                              onHover: "scale(1.15,1.15)",
                            },
                          }}
                        >
                          <p
                            onClick={this.selectCategory}
                            category={category.name}
                            style={{ textAlign: "center" }}
                          >
                            {category.name}
                          </p>
                        </AnimationWrapper>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Row>
              {/* <Row>
                <Col style={{ textAlign: "center" }}>
                  <DropdownButton
                    title={this.props.browse.activeCategory}
                    style={{ width: "100%" }}
                    id={"dropdown-basic-button"}
                  >
                    {this.props.browse.categories.map((category) => (
                      <Dropdown.Item>
                        {console.log(category)}
                        <h5
                          onClick={this.selectCategory}
                          category={category.name}
                        >
                          {category.name}
                        </h5>
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>
              </Row> */}
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <h3 style={{ textAlign: "center" }}>
                    {this.props.browse.activeCategory}
                  </h3>
                </Col>
              </Row>
              <Row>
                <CategoryProducts category={this.props.browse.activeCategory} />
              </Row>
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
    setActiveCategory: (category) => dispatch(setActiveCategory(category)),
  };
};
export const Browse = connect(mapStateToProps, mapDispatchToProps)(BrowseRaw);
