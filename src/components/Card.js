import React from "react";
// import Leader from "../images/image12.png";
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.coverImg}`)}
        className="card--image"
      />
      <p className="card--stats">
        <i className="bi bi-star-fill card--star"></i>
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})&nbsp;·</span>
        <span className="gray">{props.location}</span>
      </p>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
