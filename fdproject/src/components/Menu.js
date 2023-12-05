import React from "react";
import Card from "./Card";
import car from "../asset/Illustrations.png";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./Menu.css";
import Container from "@mui/material/Container";

function Menu() {
  return (
    <div className="mcont">
      <div>
        <Grid container spacing={2}>
          <Grid xs={2}>
            <Card emoji="🍕" txt="Pizza" />
          </Grid>
          <Grid xs={2}>
            <Card emoji="🍔" txt="Burger" />
          </Grid>
          <Grid xs={2}>
            <Card emoji="🍣" txt="Sushi" />
          </Grid>
          <Grid xs={6}>
            <div className="bigcard">
              <h1>
                Find <span>deals</span>, <span>free delivery</span>, and more
                from our restaurant partners.
              </h1>
              <img
                style={{ width: 192.13, height: 116.77 }}
                src={car}
                alt="car"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 50, marginBottom: 200 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <div className="bigcard2">
              <h1>
                Discover ,<span>exclusive offers </span>
                complimentary delivery, and more from our network of restaurant
                partners.
              </h1>
              <button>HERE</button>
            </div>
          </Grid>
          <Grid xs={2}>
            <Card emoji="🍝" txt="Pasta" />
          </Grid>
          <Grid xs={2}>
            <Card emoji="🥗" txt="Salad" />
          </Grid>
          <Grid xs={2}>
            <Card emoji="🍰" txt="Desserts" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Menu;
