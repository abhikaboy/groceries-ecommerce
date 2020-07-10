import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { AnimationWrapper } from "react-hover-animation";
import { connect } from "react-redux";
import { setActiveDepartment } from "../../Actions/setActiveDepartment";
import { setCategories } from "../../Actions/setCategories";
const axios = require("axios");
export class AnimatedListItemRaw extends Component {
  clickHandle = () => {
    this.props.setActiveDepartment(this.props.id);
    axios({
      method: "get",
      url:
        "http://runmobileapps.com/sales_intig/grocerry_backend/api/category-list",
      params: {
        shop_id: 1,
        depertmentname: this.props.name,
      },
    })
      .then((res) => this.props.setCategories(res.data.category_list))
      .catch((err) => console.log(err));
  };
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
            initial: "0px solid rgba(255,0,0,0.5)",
            onHover: "8px solid red",
          },
          transform: {
            initial: "scale(1,1)",
            onHover: "scale(1,1)",
          },
        }}
      >
        <ListGroup.Item style={style} onClick={this.clickHandle}>
          {this.props.name}
        </ListGroup.Item>
      </AnimationWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    browse: state.browse,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setActiveDepartment: (departmentID) =>
      dispatch(setActiveDepartment(departmentID)),
    setCategories: (categories) => dispatch(setCategories(categories)),
  };
};
export const AnimatedListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimatedListItemRaw);
