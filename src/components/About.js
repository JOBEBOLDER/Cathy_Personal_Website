import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
}
handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
        <p>
            I am currently a <b>Software Development Engineer</b> at
            <a href="https://www.aboutamazon.com/"> Amazon</a>, working in the AWS
            sector under team Route 53. At the same time, I am undertaking a
            full-time <b> Master's of Science</b> in <b>Computer Science </b>at{" "}
            <a href="https://www.khoury.northeastern.edu/">Northeastern University</a>.






        </p>
    )
  }
















}