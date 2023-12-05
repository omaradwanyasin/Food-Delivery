import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Menu from "./Menu";
import Howtoorder from "./Howtoorder";
import Footer from "./Footer";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar/>
      <Header />
      <div className="maintext">
        <h1>
          MORE THAN <span>10,000</span> DISHES TO ORDER!
        </h1>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <Menu/>
      <Howtoorder />
      <Footer />
    </div>
  );
}

export default Home;
