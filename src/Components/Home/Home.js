import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { ItemCard } from "./ItemCard";
import { DepartmentIcon } from "./DepartmentIcon";
import { setFrequentlyBought } from "../../Actions/setFrequentlyBought";

import { connect } from "react-redux";
const axios = require("axios");
export class HomeRaw extends Component {
  componentDidMount() {}
  generateTable = (products) => {
    console.log(products);
    try {
      if (products.length > 0) {
        let total = [];
        let rows = [];
        for (let i = 0; i < products.length; i++) {
          console.log(products[i]);
          if (i % 4 == 0) {
            console.log(i);
            // ready to start a new row
            rows.push([
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
            ]);
            console.log("adding row!");
          }
          rows[rows.length - 1][i % 4] = (
            <Col sm={6} xs={12} md={4} lg={3}>
              <DepartmentIcon
                name={products[i].name}
                src="
                https://img.icons8.com/cotton/2x/steak-rare.png"
              />
            </Col>
          );
        }
        for (let i = 0; i < rows.length; i++) {
          console.log(total);
          console.log(rows[i]);
          total.push(
            <Row style={{ width: "150%", padding: "3vh" }}>{rows[i]}</Row>
          );
        }
        console.log("TOTAL!!!");
        return total;
      } else {
        return (
          <Row>
            {" "}
            <h4>Department Not Found</h4>
          </Row>
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  generateItemTable = (products) => {
    try {
      if (products.length > 0) {
        let total = [];
        let rows = [];
        for (let i = 0; i < products.length; i++) {
          console.log(products[i]);
          if (i % 4 == 0) {
            console.log(i);
            // ready to start a new row
            rows.push([
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
              <Col sm={6} xs={12} md={4} lg={3}></Col>,
              <Col sm={6} xs={12} md={4} lg={3}>
                {" "}
                sm={6} xs={12} md={4} lg={3}
              </Col>,
            ]);
            console.log("adding row!");
          }
          rows[rows.length - 1][i % 4] = (
            <Col sm={6} xs={12} md={4} lg={3}>
              <ItemCard
                price={products[i].price}
                name={products[i].name}
                description={products[i].description}
                size={products[i].pack_size}
                id={products[i].id}
                img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
              />
            </Col>
          );
        }
        for (let i = 0; i < rows.length; i++) {
          console.log(total);
          console.log(rows[i]);
          total.push(<Row>{rows[i]}</Row>);
        }
        console.log("TOTAL!!!");
        return total;
      } else {
        return (
          <Row>
            {" "}
            <h4>Oops, we couldn't find anything!</h4>
          </Row>
        );
      }
    } catch (err) {}
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Carousel
              slide
              touch
              indicators
              interval="3000"
              style={carouselStyle}
            >
              <Carousel.Item style={carouselStyle}>
                <div style={firstSlide}>
                  <h2 style={featureText}>New Summer Sale</h2>
                </div>
              </Carousel.Item>
              <Carousel.Item style={carouselStyle}>
                <div style={secondSlide}>
                  <h2 style={featureText}>Lowest Prices All Season</h2>
                </div>
              </Carousel.Item>
              <Carousel.Item style={carouselStyle}>
                <div style={thirdSlide}>
                  <h2 style={featureText}>Fresh Food</h2>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(248,248,248)",
            color: "black",
            padding: "6vh",

            clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 0 100%)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "auto",
              fontFamily: "Raleway",
            }}
          >
            Featured Products
          </h2>
        </Row>
        <Row>
          <Container>
            <Row sm style={rowSpacing}>
              <Col sm>
                {" "}
                <ItemCard
                  name="Apple"
                  price="5"
                  img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                />
              </Col>
              <Col sm>
                <ItemCard
                  name="Pear"
                  price="5"
                  img="https://www.carrgro.com/image/cache/data/Produce/Fruits/Pear/Barlette%20Pear-400x400.jpg"
                />
              </Col>
              <Col sm>
                {" "}
                <ItemCard
                  name="Kiwi"
                  price="2"
                  img="https://webstockreview.net/images/kiwi-clipart-kiwi-fruit-1.png"
                ></ItemCard>
              </Col>
              <Col sm>
                <ItemCard
                  name="Pineapple"
                  price="10"
                  img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2013%2F07%2Fpineapple-pesticide-400x400.jpg"
                />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(52,52,52)",
            color: "white",
            padding: "5vh",
            paddingBottom: "8vh",
            clipPath: "polygon(0 17%, 100% 0, 100% 100%, 0 100%)",
            marginBottom: "0px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "auto",
              fontFamily: "Raleway",
            }}
          >
            Departments
          </h2>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(52,52,52)",
            paddingTop: "2vh",
            paddingBottom: "10vh",
            boxShadow: "0px 10px 10px black",
            clipPath: "polygon(0 0%, 100% 0, 100% 97%, 0 100%)",
            marginTop: "0px",
          }}
        >
          <Container>
            <Row style={center}>
              {this.generateTable(this.props.browse.departments)}
            </Row>
          </Container>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(255,255,255 )",
            color: "black",
            padding: "5vh",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "auto",
              fontFamily: "Raleway",
            }}
          >
            Your Favorites
          </h2>
        </Row>
        <Row style={{ padding: "5vh" }}>
          <Container>
            <Row>
              {this.generateItemTable(this.props.browse.frequentlyBought.data)}
            </Row>
          </Container>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(255,255,255 )",
            color: "black",
            padding: "5vh",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "auto",
              fontFamily: "Raleway",
            }}
          >
            Recently Bought
          </h2>
        </Row>
        <Row style={{ padding: "5vh" }}>
          <Container>
            <Row>
              {this.generateItemTable(this.props.browse.recentlyBought.data)}
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
const button = {
  padding: "8vh",
};
const firstSlide = {
  background:
    "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://wallpapersmug.com/download/1920x1080/c64bec/fruits-salad-fresh.jpg)",
  height: "400px",
  width: "100%",
};
const secondSlide = {
  background:
    "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg)",
  height: "400px",
  width: "100%",
};
const thirdSlide = {
  background:
    "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://klewtv.com/resources/media/6cef8d21-ccca-4707-a6c5-de923d4ac6bb-large16x9_MGN_1280x960_00324B00AVQBE.jpg?1586476666622)",
  height: "400px",
  width: "100%",
};
const carouselStyle = {
  height: "400px",
  marginTop: "2vh",
  width: "100%",
  // boxShadow: "0px 0px 0px black",
};
const rowSpacing = {
  marginTop: "5vh",
  marginBottom: "5vh",
};
const center = {
  textAlign: "center",
  width: "100%",
  padding: "10px",
  fontFamily: "Raleway",
  marginTop: "2vh",
};
const featureText = {
  color: "white",
  height: "100%",
  textAlign: "center",
  fontSize: "4em",
  paddingTop: "150px",
  fontFamily: "Raleway",
};

const mapStateToProps = (state) => {
  return {
    browse: state.browse,
  };
};
const mapDispatchToProps = (dispatch) => {
  // propName: (parameters) => dispatch(action)
  return {
    setFrequentlyBought: (products) => dispatch(setFrequentlyBought(products)),
  };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeRaw);
