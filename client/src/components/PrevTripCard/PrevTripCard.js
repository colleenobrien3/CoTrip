import React from "react";
import { Link } from "react-router-dom";
import "./PrevTripCard.css";
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
          <div className="prev-trip-one">test</div>
          <div className="prev-trip-two">test</div>
        </div>
      </div>
    </div>
  );
};

export default PrevTripCard;
