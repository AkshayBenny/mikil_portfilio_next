import React from "react";
import "./Creative.css";

function Creative(props) {
  return (
    <div className="creative-cont">
      <img src={props.img} alt="mountains" />
      <div className="details-cont">
        <p className="cheading">{props.name}</p>
        <p className="csubheading">{props.subname}</p>

        <p className="clink">Read More</p>
      </div>
    </div>
  );
}

export default Creative;
