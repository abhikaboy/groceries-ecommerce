import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { ItemCard } from "./ItemCard";
import { DepartmentIcon } from "./DepartmentIcon";
export class Home extends Component {
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
              {/* <Carousel.Item style={carouselStyle}>
                <Image
                  thumbnail
                  fluid
                  src="https://wallpaperplay.com/walls/full/6/9/a/317893.jpg"
                ></Image>
              </Carousel.Item> */}
            </Carousel>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(248,248,248)",
            color: "black",
            padding: "6vh",
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
            backgroundColor: "rgb(45,45,45)",
            color: "white",
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
            Departments
          </h2>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(52,52,52)",
            paddingTop: "2vh",
            paddingBottom: "10vh",
            boxShadow: "0px 5px 6px grey",
          }}
        >
          <Container>
            <Row style={center}>
              <Col>
                <DepartmentIcon
                  src="https://lh3.googleusercontent.com/proxy/1PbcGpUQInWPYfVCdy5XIAAnoaepq-3BIKSfNo1aVE38dg-huaX0_CH5ZhvbzBz9zmweq6NiFpFZINBioT3b6YUaFabIpbW0zVl6A5JtCyVQwujILb4Pw1p_zBpkPZwlagwPNVXIoXsPBMt195ZcqY4G1NZQ5Nr1"
                  name="Dairy"
                />
              </Col>
              <Col>
                <DepartmentIcon
                  name="Bakery"
                  src="https://lh3.googleusercontent.com/proxy/LU3fHekcLszNCY5YfBEJ_mtAxso8B5v97RrBhCJaMqgkI0CsIpMlpOBUBBMJWp1Jah4BMtADstg8K1Q1ZEJVUFW33M_7sWgyvDEtOVoi8U6h7o26mTzYa1Kj-zw-QrvK4LRxP6cnMrE13YhU4J5KJWaeBZy3X1M"
                ></DepartmentIcon>
              </Col>
              <Col>
                <DepartmentIcon
                  name="Meats"
                  src="
                    https://img.icons8.com/cotton/2x/steak-rare.png"
                />
              </Col>
            </Row>
            <Row style={center}>
              <Col>
                <DepartmentIcon
                  name="Beverages"
                  src="
                    https://www.shareicon.net/data/256x256/2015/11/12/670770_glasses_512x512.png"
                />
              </Col>
              <Col>
                <DepartmentIcon
                  name="Fruits & Vegetables"
                  src="
                    https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Furniture-Fruit_basket.png/revision/latest/scale-to-width-down/340?cb=20200329085208"
                />
              </Col>
              <Col>
                <DepartmentIcon
                  name="Beverages"
                  src="
                    https://www.shareicon.net/data/256x256/2015/11/12/670770_glasses_512x512.png"
                />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(248,248,248 )",
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
            New Additions
          </h2>
        </Row>
        <Row style={{ padding: "5vh" }}>
          <Container>
            <Row>
              <Col>
                <ItemCard
                  name="Pineapple"
                  price="10"
                  img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2013%2F07%2Fpineapple-pesticide-400x400.jpg"
                />
              </Col>
              <Col>
                <ItemCard
                  name="Pineapple"
                  price="10"
                  img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2013%2F07%2Fpineapple-pesticide-400x400.jpg"
                />
              </Col>
              <Col>
                <ItemCard
                  name="Pineapple"
                  price="10"
                  img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2013%2F07%2Fpineapple-pesticide-400x400.jpg"
                />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row></Row>
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
export default Home;
