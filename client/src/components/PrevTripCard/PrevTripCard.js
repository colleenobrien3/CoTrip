import React from "react";
import { Link } from "react-router-dom";
import "./PrevTripCard.css";
// This component relies on Infocard. Will update that is merged.
// import "../InfoCard/InfoCard.css";
// import InfoCard from "../InfoCard";
import "../../App.css";

// Function based React Component
const PrevTripCard = props => {
  // Default Class to apply to Component
  let classList = `PrevTripCard`;

  return (
    <div className={classList}>
      <div className="prev-card-inner">
        <div className="prev-card-title">Previous Trips</div>
        <div className="prev-trip-images">
          <div className="prev-trip-one">
            {/* placeholder: */}
            {/* <div className="InfoCard"></div> */}
          </div>
          <div className="prev-trip-two">
            {/* placeholder: */}
            {/* <div className="InfoCard"></div> */}
          </div>
          <div className="yellow-nav">
            <Link to={props.to} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevTripCard;
