import React, { useEffect, useState } from "react";
import Banner from "../header/Banner";
import ProductHome from "../products/ProductHome";
import Footer from "../menu/Footer";
import Menu from "../header/Menu"
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="containerHomeBox">
       <hr/>
      <Banner />
      <Menu/>
      <ProductHome />
      <Footer />
    </div>
  );
};

export default Home;
