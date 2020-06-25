import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ItemCard } from "./ItemCard";
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
              interval="4000"
              style={carouselStyle}
            >
              <Carousel.Item style={carouselStyle}>
                <div style={firstSlide}>
                  <h2 style={featureText}>New Summer Sale</h2>
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
        <Row>
          <h2 style={center}>Featured Products</h2>
        </Row>
        <Row>
          <Container>
            <Row sm style={rowSpacing}>
              <Col sm>
                {" "}
                <ItemCard
                  name="Apple"
                  price="5$"
                  img="https://everfreshfruit.com/wp-content/uploads/2018/05/Fuji-Apple_1000-400x400.jpg"
                />
              </Col>
              <Col sm>
                <ItemCard
                  name="Pear"
                  price="5$"
                  img="https://www.carrgro.com/image/cache/data/Produce/Fruits/Pear/Barlette%20Pear-400x400.jpg"
                />
              </Col>
              <Col sm>
                {" "}
                <ItemCard
                  name="Kiwi"
                  price="2$"
                  img="https://lh3.googleusercontent.com/proxy/YIvYQyPFEpDp_qvnB1bP8ZxChz1J2s9W8hPqxwODM9gpTPUMT50YSionY1VNszUOGX0bMiOqjdfIvA-SVAMvn7HhD8C0WmeFtcUdgNr-ikm_ULFjQ5ge62C9OkiHC45nKdOxJkMQ4-2X"
                ></ItemCard>
              </Col>
              <Col sm>
                <ItemCard
                  name="Pineapple"
                  price="10$"
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
            paddingTop: "10vh",
            paddingBottom: "1vh",
          }}
        >
          <h2 style={center}>Departments</h2>
        </Row>
        <Row
          style={{
            backgroundColor: "rgb(52,52,52)",
            paddingTop: "2vh",
            paddingBottom: "10vh",
            boxShadow: "0px 10px 20px grey",
          }}
        >
          <Container>
            <Row style={center}>
              <Col>
                <Button variant="outline-light" style={button}>
                  Dairy
                </Button>
                <Button variant="outline-light" style={button}>
                  Bakery
                </Button>
                <Button variant="outline-light" style={button}>
                  Meats
                </Button>
                <Button variant="outline-light" style={button}>
                  Beverages
                </Button>
                <Button variant="outline-light" style={button}>
                  Fruits & Vegetables
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <h2 style={center}>New Additions</h2>
        </Row>
        <Row>
          lol<div className="shadow-box-example z-depth-5"></div>
        </Row>
      </Container>
    );
  }
}
const button = {
  height: "13vh",
  width: "13vw",
  textAlign: "center",
};
const firstSlide = {
  background:
    "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://wallpapersmug.com/download/1920x1080/c64bec/fruits-salad-fresh.jpg)",
  height: "400px",
  width: "100%",
};
const carouselStyle = {
  height: "400px",
  marginTop: "2vh",
  width: "100%",
  boxShadow: "0px 6px 15px grey",
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
