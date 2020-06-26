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
import AnimatedListItem from "./AnimatedListItem";

export class Browse extends Component {
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
                      <h3>Categories</h3>
                    </ListGroup.Item>
                    <AnimatedListItem name="Dairy" selected={true} />
                    <AnimatedListItem name="Meats" selected={false} />
                    <AnimatedListItem name="Bakery" selected={false} />
                    <AnimatedListItem
                      name="Fruits & Vegetables"
                      selected={false}
                    />
                    <AnimatedListItem name="Snacks" selected={false} />
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <h2>Dairy</h2>
              </Row>
              <Row style={{ marginBottom: "3vh" }}>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "3vh" }}>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "3vh" }}>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
                <Col>
                  <ItemCard
                    name="Apple"
                    price="5$"
                    img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Browse;
