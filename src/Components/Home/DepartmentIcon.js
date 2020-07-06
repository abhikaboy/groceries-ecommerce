import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { AnimationWrapper } from "react-hover-animation";
export class DepartmentIcon extends Component {
  render() {
    return (
      <AnimationWrapper
        config={{
          opacity: {
            initial: "1",
            onHover: "1",
          },
          transform: {
            initial: "scale(1,1) translateY(0px)",
            onHover: "scale(1.1,1.1) translateY(-10px)",
          },
          backgroundImage: {
            initial: "",
            onHober: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))",
          },
        }}
      >
        <Button variant="outline-light" style={button} href="./Browse">
          {this.props.name} <br></br>
          <Image
            rounded
            style={{ width: "150px", height: "150px" }}
            src={this.props.src}
          ></Image>
        </Button>
      </AnimationWrapper>
    );
  }
}

const button = {
  padding: "8vh",
};
export default DepartmentIcon;
