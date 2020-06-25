import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { AnimationWrapper } from "react-hover-animation";
export class AnimatedListItem extends Component {
  render() {
    let style;
    if (this.props.selected) {
      style = { borderLeft: "8px solid red" };
    } else {
      style = { color: "black" };
    }
    return (
      <AnimationWrapper
        config={{
          borderLeft: {
            initial: "0px solid rgba(255,100,100,0.5)",
            onHover: "8px solid red",
          },
          transform: {
            initial: "scale(1,1)",
            onHover: "scale(1,1)",
          },
        }}
      >
        <ListGroup.Item style={style}>{this.props.name}</ListGroup.Item>
      </AnimationWrapper>
    );
  }
}

export default AnimatedListItem;
