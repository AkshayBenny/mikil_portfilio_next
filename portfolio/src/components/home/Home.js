import React from "react";
import "./Home.css";
import Header from "../header/Header";
import Heading from "./home_components/heading/Heading";
import Subheading from "./home_components/subheading/Subheading";

function Home() {
  return (
    <div className="home-cont">
      <Header />
      <Heading />
      <Subheading />
    </div>
  );
}

export default Home;
