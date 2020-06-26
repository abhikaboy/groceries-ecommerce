import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { AnimationWrapper } from "react-hover-animation";
import { setSearch } from "../../Actions/setSearch";
import { connect } from "react-redux";

export class NavigationRaw extends Component {
  search = () => {
    this.props.setSearch(true);
  };
  render() {
    return (
      <div>
        <Container style={containerStyle} fluid justify>
          <Row>
            <Col>
              <Image
                style={imageStyle}
                src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar bg="dark" variant="dark" style={center}>
                <Nav className="mr-auto center" style={center}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="browse">Shop By Department</Nav.Link>
                  <Nav.Link href="pricing">Deals</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
            <div style={{ position: "absolute", marginLeft: "90%" }}>
              <Container>
                <Row>
                  <Col>
                    <AnimationWrapper>
                      <Image
                        src="https://static.thenounproject.com/png/101791-200.png"
                        rounded
                        style={{ width: "30px", height: "30px" }}
                        onClick={this.search}
                      />
                    </AnimationWrapper>
                  </Col>
                  <Col>
                    <AnimationWrapper>
                      <Image
                        src="https://static.thenounproject.com/png/3134331-200.png"
                        rounded
                        style={{ width: "30px", height: "30px" }}
                      />
                    </AnimationWrapper>
                  </Col>
                  <Col>
                    <AnimationWrapper>
                      <a href="/cart">
                        <Image
                          src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png"
                          rounded
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    </AnimationWrapper>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
const containerStyle = {
  textAlign: "center",
  backgroundColor: "#343a40",
  //backgroundColor: "rgb(100,200,100)",
};
const center = {
  textAlign: "center",
  margin: "auto",
  textColor: "white",
};
const imageStyle = {
  width: "240px",
  height: "80px",
  textAlign: "center",
};
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setSearch: (show) => dispatch(setSearch(show)),
  };
};
export const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationRaw);
