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
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

const loginPopover = (
  <Popover id="popover-basic">
    <Popover.Content>
      <Container fluid>
        <Row>
          <Button
            variant="outline-primary"
            style={{ width: "100%" }}
            href="./Login"
          >
            Login
          </Button>
        </Row>
        <Row>
          <Button variant="primary" style={{ width: "100%" }} href="./Register">
            Register
          </Button>
        </Row>
      </Container>
    </Popover.Content>
  </Popover>
);
export class NavigationRaw extends Component {
  search = () => {
    this.props.setSearch(true);
  };
  profileClickHandle = () => {};
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
                </Nav>
              </Navbar>
            </Col>
            <div style={{ position: "absolute", marginLeft: "90%" }}>
              <Container>
                <Row>
                  <Col>
                    <AnimationWrapper>
                      <Image
                        src="https://cdn.discordapp.com/attachments/468305263124807690/727180207974252604/010-zoom.png"
                        rounded
                        style={{
                          width: "30px",
                          height: "30px",
                          filter: "invert(100%)",
                        }}
                        onClick={this.search}
                      />
                    </AnimationWrapper>
                  </Col>
                  <Col>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 250, hide: 400 }}
                      overlay={loginPopover}
                      trigger="click"
                    >
                      <AnimationWrapper>
                        <Image
                          src="https://media.discordapp.net/attachments/468305263124807690/727180178467455107/009-user.png"
                          rounded
                          style={{
                            width: "30px",
                            height: "30px",
                            filter: "invert(100%)",
                          }}
                          id="profileIcon"
                        />
                      </AnimationWrapper>
                    </OverlayTrigger>
                  </Col>
                  <Col>
                    <AnimationWrapper>
                      <a href="/cart">
                        <Image
                          src="https://cdn.discordapp.com/attachments/468305263124807690/727180131608559656/001-shopping-cart.png"
                          rounded
                          style={{
                            width: "30px",
                            height: "30px",
                            filter: "invert(100%)",
                          }}
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
