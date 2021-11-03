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
      <Creative />
    </div>
  );
}

export default Home;
