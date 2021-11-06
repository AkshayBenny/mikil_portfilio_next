import React from "react";

function About() {
  return (
    <div className="about-cont">
      <div className="about-heading-cont">
        <p className="about-sheading">About Me</p>
        <h1 className="about-heading">Nice To Meet You</h1>
      </div>
      <div className="dp-cont">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="dp"
        />
      </div>
      <div className="about-details-cont">
        <div className="about-title">
          <h1>
            Hey All,
            <img
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              width="55px"
              alt="wave"
            ></img>
          </h1>
        </div>
        <div className="about-content-cont">
          <p className="about-cont">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. E xercitation
            venia m consequat sunt nostrud amet. Deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="tools-cont">
          <div className="tools-title">
            <h2>Familiar Tools</h2>
          </div>
          <div className="tools-icons-cont">
            <div className="adobexd-cont">
              <img src="" alt="adobe-icon" />
            </div>
            <div className="photoshop-cont">
              <img
                src="https://img.icons8.com/color/48/000000/adobe-photoshop.png"
                alt="ps icon"
              />
            </div>
            <div className="figma-cont">
              <img
                src="https://img.icons8.com/color/48/000000/figma.png"
                alt="figma"
              />
            </div>
            <div className="illustrator-cont">
              <img
                src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png"
                alt="adobe-illustrator"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
