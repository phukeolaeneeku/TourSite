import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/pakse.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import hotel_pakse2 from "../../../img/hotel_pakse2.jpg";
import hotel_pakse3 from "../../../img/hotel_pakse3.jpg";
import hotel_pakse4 from "../../../img/hotel_pakse4.jpg";

function HotelPakse() {
  return (
    <>
      <Header />
      <div className="containner_Hotel_pakse">
        <Link to="/" className="back_icons_back_pakse">
          <IoIosArrowBack />
          <p>Back</p>
        </Link>
        <div className="content_itemPakse">
          <div className="container_head_pakse">
            <h3 className="txt_head_pakse">
              <span className="span_Style_pakse"></span>Hotel Pakse
            </h3>
          </div>
          <div className="content_image_Hotel_pakse">
            <div className="group_item_Box_pakse">
              <Link to="/details" className="image">
                <img src={hotel_pakse2} alt="img" />
              </Link>
              <div className="txt_desc_pakse">
                <h3>Vientiane</h3>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="box_icon_star"> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                </p>
              </div>
            </div>
            <div className="group_item_Box_pakse">
              <Link to="/details" className="image">
                <img src={hotel_pakse3} alt="img" />
              </Link>
              <div className="txt_desc_pakse">
                <h3>Vientiane</h3>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="box_icon_star"> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                </p>
              </div>
            </div>
            <div className="group_item_Box_pakse">
              <Link to="/details" className="image">
                <img src={hotel_pakse4} alt="img" />
              </Link>
              <div className="txt_desc_pakse">
                <h3>Vientiane</h3>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="box_icon_star"> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                    <IoStar id="icon_star"/> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HotelPakse;
