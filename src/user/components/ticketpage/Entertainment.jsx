import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import { IoIosArrowBack } from "react-icons/io";
import Entertainment from "../../../img/Entertainment.jpg";
import Entertainment1 from "../../../img/Entertainment1.jpg";
import Entertainment2 from "../../../img/Entertainment2.jpg";

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
                    <span className="span_Style_airplane"></span>Entertainment
                  </h3>
                </div>
                <div className="content_image_airplane">
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="image">
                      <img src={Entertainment} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Entertainment in Vientaine</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque!
                      </p>
                    </div>
                  </div>
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="image">
                      <img src={Entertainment1} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Entertainment in Vientaine</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque!
                      </p>
                    </div>
                  </div>
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="image">
                      <img src={Entertainment2} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Entertainment in Vientaine</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eaque!
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

export default Massage;
