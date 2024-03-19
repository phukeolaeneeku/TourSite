import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/golf.css";
import { IoIosArrowBack } from "react-icons/io";
import golf from "../../../img/golf.png";
import golf2 from "../../../img/golf2.jpg";
import golf4 from "../../../img/golf4.png";

function Oneday() {
  return (
    <>
      <Header />
      <div className="containnergolf_body">
        <Link to="/" className="back_icons_back_golf">
          <IoIosArrowBack />
          <p>Back</p>
        </Link>
        <div className="content_itemGolf">
          <div className="container_head">
            <h3 className="txt_head">
              <span className="span_Style"></span>Golf
            </h3>
          </div>
          <div className="content_image_Products">
            <div className="group_item_Box">
              <Link to="/details" className="image">
                <img src={golf} alt="img" />
              </Link>
              <div className="txt_desc">
                <h3>Vientiane</h3>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={golf2} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>Vientiane</h3>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={golf4} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>Vientiane</h3>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="txt_sprice">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Oneday;
