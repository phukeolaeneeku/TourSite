import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/golf.css";
import { IoIosArrowBack } from "react-icons/io";
import golf from "../../../img/golf.png";
import golf2 from "../../../img/golf2.jpg";
import golf4 from "../../../img/golf4.png";

function Oneday() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containnergolf_body">
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
                <h3>Laos Golf Pack 3 Nights 5 Days</h3>
                <p>
                  A city golf trip in Vientiane, the capital of Laos
                </p>
                <div className="price">
                  <p className="price_num">$400</p>
                  <p> ￦450,100 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={golf2} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>Laos Golf Pack 4 nights and 6 days</h3>
                <p>
                  City golf trip in Vientiane
                </p>
                <div className="price">
                  <p className="price_num">$600</p>
                  <p> ￦800,000 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={golf4} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>Laos Golf Pack 2 Nights 3 Days</h3>
                <p>
                  A city golf trip in Vientiane, the capital of Laos
                </p>
                <div className="txt_sprice">
                  <p className="price_num">$150</p>
                  <p> ￦350,000 </p>
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
