import React from "react";
import { Link } from "react-router-dom";
import "./css/details.css";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import patusai from "../../../img/patusai.jpg";
import patusai2 from "../../../img/patusai2.jpg";

function Details() {
  return (
    <>
        <Header />
        <div className="contentBody">
            <Link to="/" className="box_container_back_icons_back">
                <IoIosArrowBack id="icons_back" />
                <p>Back</p>
            </Link>

            <div className="boxProduct_deteils">
                <div className="product-page-img">
                    <div className="myslides">
                      <img src={patusai} alt="" />
                    </div>
                </div>

                <div className="txtContentproduct">
                  <h2 className="txt_nameP">Vientiane Airport Pickup Service</h2>
                  <p className="txt_description">We will conveniently transport you from the airport to your hotel.</p>
                  <p className="money_txt">$10 ￦15,000 </p>
                  <p className="txt_review">Review:12.300</p>
                </div>
            </div>

            <div className="content_item_details">
                <div className="container_details">
                    <h3 className="htxthead">
                        <span className="spennofStyle"></span>INFORMATION
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
