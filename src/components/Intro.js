import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"gazi"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I dream, and create.</div>
          <div className="intro-desc">
          Hi 👋, I’m Jieyao (Cathy) Chen!

            I’m currently pursuing a Master’s in Computer Science at Northeastern University.

            With a background in architecture design 🏛️👩‍🎨 and a strong passion for user-centered solutions, I integrate design thinking with technical expertise to build innovative and intuitive digital experiences. 
            My transition allows me to approach challenges from a unique perspective, bridging creativity and technology.

            I’m always open to new opportunities and collaborations—feel free to connect or reach out if you’d like to chat!
          </div>
          <a
            href="mailto:gazijarin@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
