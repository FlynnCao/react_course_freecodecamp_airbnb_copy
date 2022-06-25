import React from "react";
// import Leader from "../images/image12.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={require(`../images/${props.img}`)} className="card--image" />
      <p className="card-stat">
        <i className="bi bi-star-fill"></i>
        <span>{props.rating}</span>
        <span>{props.reviewCount}&nbsp;·</span>
        <span>{props.country}</span>
      </p>
      <p className="card-des">{props.title}</p>
      <p className="card-footer">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
