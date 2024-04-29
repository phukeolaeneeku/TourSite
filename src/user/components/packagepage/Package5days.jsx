import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/package.css";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import luangphabang from "../../../img/luangphabang.jpg";
import vangvieng6 from "../../../img/vangvieng6.jpg";
import { SiGooglemaps } from "react-icons/si";

function Package5days() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containnergolf_body">
        <div className="content_itemGolf">
          <div className="container_head">
            <h3 className="txt_head">
              <span className="span_Style"></span>Package 5 days
            </h3>
          </div>
          <div className="content_image_Products">
            <div className="group_item_Box">
              <Link to="/details" className="image">
                <img src={luangphabang} alt="img" />
              </Link>
              <div className="txt_desc">
                <h3>5 Days</h3>
                <p>
                  A city thadluang trip in Vientiane, the capital of Laos
                </p>
                <div className="price">
                  <p className="price_num">$400</p>
                  <p> ￦450,100 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={vangvieng6} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>5 days</h3>
                <p>
                A city thadluang trip in Vientiane, the capital of Laos
                </p>
                <div className="price">
                  <p className="price_num">$600</p>
                  <p> ￦800,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="image">
                <img src={patusai} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>5 Days</h3>
                <p>
                  A city thadluang trip in Vientiane, the capital of Laos
                </p>
                <div className="txt_sprice">
                  <p className="price_num">$150</p>
                  <p> ￦350,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Package5days;
