import React from "react";
import "./InteractionCard.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Button from "../Button/Button";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Image from "../../../../assets/images/profile_large.png";
// Function based React Component

const InteractionCard = props => {
  // Default Class to apply to Component
  return (
    <div className="InteractionCard">
      <ProfilePicture link="#" image={Image} />
      <Button text="Connect" color="pink" size="small" handleClick={props.handleClick} />
      <Button text="Message" color="outline" size="small" handleClick={props.handleClick} />
    </div>
  );
};

export default InteractionCard;
