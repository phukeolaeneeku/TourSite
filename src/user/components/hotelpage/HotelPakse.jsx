
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu"
import "./css/hotel.css";
import { SiGooglemaps } from "react-icons/si";
import hotel3 from "../../../img/hotel3.jpg";
import { IoStar } from "react-icons/io5";


function HotelPakse() {
  return (
    <>
        <Header />
        <Menu />
        <div className="containner_Hotel_bodys">
            <div className="content_item_Hotel">
                <div className="container_txt_head">
                    <h3 className="txt_head_Hotel">
                        <span className="span_Styles"></span>Pakse
                    </h3>
                </div>
                <div className="box_container_hotels">
                    <div className="box_container_body_hotel">
                        <div className="container_image">
                            <img src={hotel3} alt="image" />
                        </div>
                        <div className="container_desc">
                            <h2>Silver Naga Hotel</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            </p>
                            <div className="txt_hotel">
                                <p className="price_number_hotel">$10</p>
                                <p className="txt_price"> ￦15,000 </p>
                            </div>
                            <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
                            <p className="box_icon_star"> 
                                <IoStar id="icon_star"/> 
                                <IoStar id="icon_star"/> 
                                <IoStar id="icon_star"/> 
                                <IoStar id="icon_star"/> 
                                <IoStar id="icon_star"/> 
                            </p>
                        </div>
                    </div>
                    <div className="box_container_body_hotel">
                        <div className="container_image">
                            <img src={hotel3} alt="image" />
                        </div>
                        <div className="container_desc">
                            <h2>Silver Naga Hotel</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            </p>
                            <div className="txt_hotel">
                                <p className="price_number_hotel">$10</p>
                                <p className="txt_price"> ￦15,000 </p>
                            </div>
                            <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
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
