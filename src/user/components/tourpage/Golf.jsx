import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/golf.css";
import golf from "../../../img/golf.png";
import golf2 from "../../../img/golf2.jpg";
import golf4 from "../../../img/golf4.png";
import { SiGooglemaps } from "react-icons/si";
import Expandable from "../../../admin/components/managertour/Expandable";

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
              <Link to="/details" className="golf_image">
                <img src={golf} alt="img" />
              </Link>
              <div className="txt_desc">
                <h3>Laos Golf Pack 3 Nights 5 Days</h3>
                <Expandable>
                  A city golf trip in Vientiane, the capital of Laos
                </Expandable>
                <div className="price">
                  <p className="price_num">$400</p>
                  <p> ￦450,100 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="golf_image">
                <img src={golf2} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>Laos Golf Pack 4 nights and 6 days</h3>
                <Expandable>
                  City golf trip in Vientiane, Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Dicta magni omnis accusamus,
                  illo rerum qui unde harum magnam at repellat.
                </Expandable>
                <div className="price">
                  <p className="price_num">$600</p>
                  <p> ￦800,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
              </div>
            </div>
            <div className="group_item_Box">
              <div className="golf_image">
                <img src={golf4} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>Laos Golf Pack 2 Nights 3 Days</h3>
                <Expandable>
                  A city golf trip in Vientiane, the capital of Laos
                </Expandable>
                <div className="txt_sprice">
                  <p className="price_num">$150</p>
                  <p> ￦350,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
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
