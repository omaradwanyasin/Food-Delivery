import React from "react";
import Card from "./Card";

function Howtoorder() {
  return (
    <div>
      <h1>How To Order?</h1>
      <div>
        <div className="cards">
          <Card emoji="📍" txt="Choose your location" number="01" />
          <Card emoji="🙇🏻‍♂️" txt="Choose what to eat" number="02" />
          <Card emoji="🍔" txt="May your first order" number="03" />
          <Card emoji="🏠" txt="Now! Your food in way" number="04" />
        </div>
      </div>
    </div>
  );
}

export default Howtoorder;
