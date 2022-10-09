import React from "react";
import "./Card.scss";

const Card = (props) => {
  const classes = `${props.className} card`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
