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
          <div className="prev-trip-one">
            <div className="prev-trip-location">
              Location
            </div>
            <div className="prev-trip-year">
              Year
            </div>
          </div>
          <div className="prev-trip-two">
            <div className="prev-trip-location">
              Location
            </div>
            <div className="prev-trip-year">
              Year
            </div>
          </div>
        </div>
      </div>
      <div className="yellow-nav"></div>
    </div>
  );
};

export default PrevTripCard;
