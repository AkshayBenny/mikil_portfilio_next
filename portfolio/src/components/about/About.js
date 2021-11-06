import React from "react";
import xd from "../../images/xdpng.png";
import figma from "../../images/figma.png";
import illustrator from "../../images/illustrator.png";
import miro from "../../images/miro.png";
import ps from "../../images/ps.png";
import "./About.css";
// import { ReactComponent as Figma } from "../../images/figma.svg";

function About() {
  return (
    <div className="about-cont">
      <div className="about-heading-cont">
        <p className="about-sheading">About Me</p>
        <h1 className="about-heading">Nice To Meet You</h1>
      </div>

      <div className="about-row-flex">
        <div className="dp-cont">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            alt="dp"
          />
        </div>
        <div className="about-details-cont">
          <div className="about-title">
            <h1 className="about-hey">
              Hey All,
              <img
                src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                width="35px"
                alt="wave"
              ></img>
            </h1>
          </div>
          <div className="about-content-cont">
            <p className="about-content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. E
              xercitation venia m consequat sunt nostrud amet. Deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
          <div className="tools-cont">
            <div className="tools-title">
              <h2 className="about-familiar">Familiar Tools</h2>
            </div>
            <div className="tools-icons-cont">
              <div className="adobexd-cont">
                <img className="tool-img" src={xd} alt="adobe-icon" />
              </div>
              <div className="photoshop-cont">
                <img className="tool-img" src={ps} alt="photoshop" />
                {/* <Figma /> */}
              </div>
              <div className="figma-cont">
                <img className="tool-img" src={figma} alt="figma" />
              </div>
              <div className="illustrator-cont">
                <img className="tool-img" src={illustrator} alt="illustrator" />
              </div>
              <div className="miro-cont">
                <img className="tool-img" src={miro} alt="miro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
