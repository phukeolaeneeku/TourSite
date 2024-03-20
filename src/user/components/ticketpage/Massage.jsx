import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import { IoIosArrowBack } from "react-icons/io";
import guide from "../../../img/guide.jpg";
import massage1 from "../../../img/massage1.jpg";
import massage2 from "../../../img/massage2.jpg";

function Massage() {
  return (
    <>
        <Header />
        <Menu />
            <div className="containner_airplane">
              <Link to="/" className="back_icons_back_airpane">
                <IoIosArrowBack />
                <p>Back</p>
              </Link>
              <div className="content_itemAirplane">
                <div className="container_head_airplane">
                  <h3 className="txt_head_airplane">
                    <span className="span_Style_airplane"></span>Massage
                  </h3>
                </div>
                <div className="content_image_airplane">
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="image">
                      <img src={massage1} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Massage and Spa</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque!
                      </p>
                      <div className="price">
                        <p className="price_num">$10</p>
                        <p> ￦15,000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="image">
                      <img src={massage2} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Massage Vang Vieng</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque!
                      </p>
                      <div className="price">
                        <p className="price_num">$10</p>
                        <p> ￦15,000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="image">
                      <img src={guide} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Massage Vientiane</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque!
                      </p>
                      <div className="price">
                        <p className="price_num">$10</p>
                        <p> ￦15,000 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <Footer />
    </>
  );
}

export default Massage;
