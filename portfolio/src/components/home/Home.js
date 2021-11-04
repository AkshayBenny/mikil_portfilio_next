import React from "react";
import "./Home.css";
import Header from "../header/Header";
import Heading from "./home_components/heading/Heading";
import Subheading from "./home_components/subheading/Subheading";
import Creative from "./home_components/creative/Creative";
import Other from "./home_components/other/Other";

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
      <div className="creative-cards-cont">
        <Creative
          img="https://images.unsplash.com/photo-1635898445837-65c066642d81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Deep in the desert"
          subname="Freelance Project"
        />
        <Creative
          img="https://images.unsplash.com/photo-1635910162005-4a295b1bcca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Deep in the desert"
          subname="Freelance Project"
        />

        <Creative
          img="https://images.unsplash.com/photo-1635915575783-2cc97830a1a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80"
          name="Deep in the desert"
          subname="Freelance Project"
        />
        <Creative
          img="https://images.unsplash.com/photo-1635899256324-4d14da5dd8b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"
          name="Deep in the desert"
          subname="Freelance Project"
        />
      </div>
      <h2>What Else I do ?</h2>
      <div className="other-cont-main">
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
        <Other />
      </div>
    </div>
  );
}

export default Home;
