import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import { connect } from "react-redux";
import { AnimationWrapper } from "react-hover-animation";
import { setActive } from "../../Actions/setActiveItem";
export class ItemCardRaw extends Component {
  clickFunc = () => {
    this.props.setActive({
      name: this.props.name,
      url: this.props.img,
      price: this.props.price,
      description: "this is the description",
      display: true,
    });
  };
  render() {
    return (
      <AnimationWrapper
        config={{
          transform: {
            initial: "scale(1,1)",
            onHover: "scale(1.05,1.05)",
          },
        }}
      >
        <Card
          border="secondary"
          style={{ width: "100%" }}
          class="card"
          onClick={this.clickFunc}
        >
          <Card.Img variant="top" src={this.props.img}></Card.Img>
          <Card.Body>
            <ListGroup variant="flush" style={center}>
              <ListGroup.Item>{this.props.name}</ListGroup.Item>
              <ListGroup.Item>
                <Image
                  style={{ width: "100%" }}
                  src="https://lh3.googleusercontent.com/proxy/2BWkupIGLnGX8jIzN4NeqrZQTa1odbBthxyAi1kzRjdeq9eEmLmq1jP_mSS6qj68JbRuP_jG9xVt_1BM4ucckN8avXbTCmQ"
                ></Image>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer style={center}>{this.props.price}</Card.Footer>
        </Card>
      </AnimationWrapper>
    );
  }
}
const center = {
  textAlign: "center",
  width: "100%",
  padding: "10px",
  fontFamily: "Raleway",
};
const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setActive: (data) => dispatch(setActive(data)),
  };
};

export const ItemCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCardRaw);
