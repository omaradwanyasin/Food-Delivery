import React from "react";
import "./Navbar.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "../pages/Signup";
import Test from "../pages/Test";

function Navbar() {
  return (
    <div className="Nav-cont">
      <div>
        <Link to={"/"}>
          <h1 style={{ height: 40 }}>🍕</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>Restaurants</li>
          <li>Recipes</li>
          <li>About</li>
        </ul>
      </div>
      <div>
        <Link to="/login">
          <button style={{ backgroundColor: "#f6f6f6", color: "black" }}>
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
