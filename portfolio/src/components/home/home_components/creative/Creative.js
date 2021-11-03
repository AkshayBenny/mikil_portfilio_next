import React from "react";
import "./Creative.css";

function Creative(props) {
  return (
    <div className="creative-cont">
      <img
        src="https://images.unsplash.com/photo-1635898445837-65c066642d81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="mountains"
      />
      <div className="details-cont">
        <p className="cheading">Deep in the jungle</p>
        <p className="csubheading">Freelance Project</p>
        <p className="clink">Read More</p>
      </div>
    </div>
  );
}

export default Creative;
