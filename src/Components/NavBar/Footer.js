import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div style={footer}>
        <ul style={{ listStyleType: "none" }}>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <p>Shoprite at Hamilton Marketplace</p>
      </div>
    );
  }
}
const footer = {
  backgroundColor: "rgb(24,24,24)",
  padding: "4vh",
  color: "white",
  width: "100%",
};
export default Footer;
