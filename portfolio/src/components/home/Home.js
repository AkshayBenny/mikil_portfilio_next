import React from "react";
import "./Home.css";
import Header from "../header/Header";
import Heading from "./home_components/heading/Heading";
import Subheading from "./home_components/subheading/Subheading";
import Creative from "./home_components/creative/Creative";

function Home() {
  return (
    <div className="home-cont">
      <Header />
      <Heading />
      <Subheading />

      <div className="portfolio-cont">
        <p className="portfolio-heading">Portfolio</p>
        <h2>Creative Works</h2>
      </div>
      <div className="creative-cards-cont-row-one">
        <Creative />
        <Creative />
      </div>
      <div className="creative-cards-cont-row-two">
        <Creative />
        <Creative />
      </div>
    </div>
  );
}

export default Home;
