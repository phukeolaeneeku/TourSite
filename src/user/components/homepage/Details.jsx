import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/details.css";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import { IoIosArrowBack } from "react-icons/io";
import patusai from "../../../img/patusai.jpg";
import patusai2 from "../../../img/patusai2.jpg";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {

  return (
    <>
      <Header />
      <Menu />
      <div className="contentBody">
    
        <div className="boxProduct_deteils">
          <div className="product-page-img">
            <div className="myslides">
              <img src={patusai} alt="" />
            </div>
          </div>

          <div className="txtContentproduct">
            <h1>Vientiane Airport Pickup Service</h1>
            <p className="txt_description">
              We will conveniently transport you from the airport to your hotel.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              non dolorum, molestias saepe nemo aut rerum, sit ut adipisci omnis
              minima est. Laudantium ratione eaque ducimus? Inventore
              consectetur, distinctio soluta natus molestiae dolorem ipsum
              obcaecati minus aliquam, officiis est provident fugit voluptate!
              Nihil recusandae, veritatis porro debitis dignissimos praesentium,
              labore magni quisquam dolor aliquam accusamus? Libero rem, quidem
              beatae consequuntur aspernatur laborum, nulla quibusdam blanditiis
              maiores odio praesentium autem laudantium fugiat ratione quis
              veritatis exercitationem culpa. Illum reprehenderit voluptate
              dolor saepe deserunt suscipit doloremque sequi officia fugit ipsum
              excepturi vitae iste delectus sapiente, minus culpa enim sit quos
              recusandae. Molestiae.
            </p>
            <div className="price">
              <p className="price_num">$10</p>
            </div>
            <p className="SiGooglemaps">
              <SiGooglemaps id="icon_map" /> Vientiane
            </p>
            <p className="box_IoMdCart">
              <IoMdCart
                id="icon_IoMdCart"
              />
            </p>
          </div>
        </div>

        <div className="content_item_details">
          <div className="container_details">
            <h3 className="htxthead">
              <span className="spennofStyle"></span>View More
            </h3>
          </div>
          <div className="contentImageDetails">
            <div className="group_item_details">
              <div className="img">
                <img src={patusai2} alt="img" />
              </div>
            </div>
            <div className="group_item_details">
              <div className="img">
                <img src={patusai} alt="img" />
              </div>
            </div>
            <div className="group_item_details">
              <div className="img">
                <img src={patusai} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
