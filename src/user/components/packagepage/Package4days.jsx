import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/package.css";
import vangvieng from "../../../img/vangvieng.gif";
import vangvieng2 from "../../../img/vangvieng2.jpg";
import motorcycle from "../../../img/motorcycle.jpg";
import Expandable from "../../../admin/components/managertour/Expandable"

function Package4days() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containnergolf_body">
        <div className="content_itemGolf">
          <div className="container_head">
            <h3 className="txt_head">
              <span className="span_Style"></span>Package 4 days
            </h3>
          </div>
          <div className="content_image_Products">
            <div className="group_item_Box">
              <Link to="/details" className="image">
                <img src={motorcycle} alt="img" />
              </Link>
              <div className="txt_desc">
                <h3>4 Days</h3>
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
                <img src={vangvieng} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>4 days</h3>
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
                <img src={vangvieng2} alt="img" />
              </div>
              <div className="txt_desc">
                <h3>4 Days</h3>
                <p>
                  A city thadluang trip in Vientiane, the capital of Laos
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

export default Package4days;
