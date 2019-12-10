import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color, picture, alt } = props;
  return (
    <div className={`Card Card--${color} Card--${size}`}>
      {picture ? <img src={picture} alt={alt}></img> : null}
      {props.children}
    </div>
  );
};

export default Card;