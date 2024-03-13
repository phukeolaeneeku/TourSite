import React, { useEffect, useState } from "react";
import Banner from "../header/Banner";
import Homepage from "./Homepage";
import Footer from "../menu/Footer";
import Menu from "../header/Menu"
import "./css/home.css";

const Home = () => {
  return (
    <div className="containerHomeBox">
       
      <Banner />
      <Menu/>
      <Homepage/>
      <Footer />
    </div>
  );
};

export default Home;
