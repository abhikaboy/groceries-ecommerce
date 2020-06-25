import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
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
