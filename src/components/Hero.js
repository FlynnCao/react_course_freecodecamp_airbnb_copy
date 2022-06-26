import React from "react";
import Banner from "../images/photo-grid.png";
export default function () {
  return (
    <section className="hero">
      <img src={Banner} alt="" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
