import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="emoji-back">
        <h1>{props.emoji}</h1>
      </div>
      <div>
        <h3>{props.txt}</h3>
      </div>
      <div>
        <h1 style={{ color: "#FF5331" }}>{props.number}</h1>
      </div>
    </div>
  );
}

export default Card;
