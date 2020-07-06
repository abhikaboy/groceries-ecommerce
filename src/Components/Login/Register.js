import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

export class Register extends Component {
  render() {
    return (
      <Container fluid style={{ height: "100vh" }}>
        <Row style={{ paddingTop: "10vh" }}>
          <Col style={{ textAlign: "center" }}>
            <h3>Register</h3>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto", paddingTop: "5vh" }}>
          <Col>
            <div>
              <FormControl
                style={{ textAlign: "center", width: "20%", margin: "auto" }}
                placeholder="Email"
              ></FormControl>
            </div>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto", paddingTop: "3vh" }}>
          <Col>
            <div>
              <FormControl
                style={{ textAlign: "center", width: "20%", margin: "auto" }}
                type="password"
                placeholder="Password"
              ></FormControl>
            </div>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto", paddingTop: "3vh" }}>
          <Col>
            <div>
              <FormControl
                style={{ textAlign: "center", width: "20%", margin: "auto" }}
                type="password"
                placeholder="Confirm Password"
              ></FormControl>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            textAlign: "center",
            margin: "auto",
            paddingTop: "3vh",
          }}
        >
          <Col
            style={{
              width: "20%",
            }}
          >
            <Button style={{ width: "20%" }}>Create Account</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
