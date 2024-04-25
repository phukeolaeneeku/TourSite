import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/package.css";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";

function Package() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containnergolf_body">
        <div className="content_itemGolf">
          <div className="container_head">
            <h3 className="txt_head">
              <span className="span_Style"></span>Package 3 days
            </h3>
          </div>
          <div className="content_image_Products">
            <div className="group_item_Box">
              <Link to="/details" className="image">
                <img src={patusai} alt="img" />
              </Link>
              <div className="txt_desc">
                <h3>3 Days</h3>
                <Expandable>
                  A city thadluang trip in Vientiane, the capital of Laos
                </Expandable>
                <div className="price">
                  <p className="price_num">$400</p>
                  <p> ￦450,100 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={thadluang} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>3 days</h3>
                <Expandable>
                  A city thadluang trip in Vientiane, the capital of Laos
                </Expandable>
                <div className="price">
                  <p className="price_num">$600</p>
                  <p> ￦800,000 </p>
                </div>
                <p>Review: 200</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={patusai} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>3 Days</h3>
                <Expandable>
                  A city thadluang trip in Vientiane, the capital of Laos Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                  asperiores.
                </Expandable>
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

export default Package;
