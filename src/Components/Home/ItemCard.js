import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";
import { AnimationWrapper } from "react-hover-animation";
import { setActive } from "../../Actions/setActiveItem";
import { Quantity } from "../Browse/Quantity";

import { CSSTransition } from "react-transition-group";
import "./styles.css";

export class ItemCardRaw extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  clickFunc = () => {
    // this.props.setActive({
    //   name: this.props.name,
    //   url: this.props.img,
    //   price: this.props.price,
    //   description: "this is the description",
    //   display: true,
    // });
  };
  mouseOver = () => {
    this.setState({ hovered: true });
  };
  mouseOut = () => {
    this.setState({ hovered: false });
  };
  render() {
    return (
      <AnimationWrapper
        reset
        config={{
          transform: {
            initial: "scale(1,1)",
            onHover: "scale(1.05,1.05)",
          },
          backgroundColor: {
            initial: "rgba(255,255,255,0)",
            onHover: "rgba(255,255,255,0)",
          },
        }}
      >
        <Card
          border="secondary"
          style={{ width: "100%" }}
          class="card"
          onClick={this.clickFunc}
          onPointerEnter={this.mouseOver}
          onPointerLeave={this.mouseOut}
        >
          <CSSTransition
            in={this.state.hovered}
            timeout={300}
            classNames="itemTransition"
            unmountOnExit
          >
            <div
              style={{
                position: "absolute",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "rgba(52,255,52,0.3)",

                //backgroundColor: "rgba(255,255,52,0.3)",
                //backgroundColor: "rgba(0,0,0,0.5)",
                paddingTop: "50%",
                height: "100%",
                width: "100%",
                zIndex: "5",
              }}
            >
              <div
                style={{ width: "70%", textAlign: "center", margin: "auto" }}
              >
                <Quantity />
              </div>
              <Button>Add To Cart</Button>
            </div>
          </CSSTransition>
          <Card.Img variant="top" src={this.props.img}></Card.Img>
          <Card.Body>
            <ListGroup variant="flush" style={center}>
              <ListGroup.Item>{this.props.name}</ListGroup.Item>
              <ListGroup.Item>Item Description</ListGroup.Item>
              <ListGroup.Item style={{ color: "rgb(50,200,50)" }}>
                In Stock
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
