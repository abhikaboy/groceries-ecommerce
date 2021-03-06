import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

export class Login extends Component {
  render() {
    return (
      <Container fluid style={{ height: "100vh" }}>
        <Row style={{ paddingTop: "10vh" }}>
          <Col style={{ textAlign: "center" }}>
            <h3>Login</h3>
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
              <Form.Check type="checkbox" label="Remember Me"></Form.Check>
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
            <Button style={{ width: "20%" }}>Login</Button>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <a href="./Register">Create an Account</a>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>Forgot Password?</Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
