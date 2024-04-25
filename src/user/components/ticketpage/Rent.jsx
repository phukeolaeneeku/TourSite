import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import car from "../../../img/car.jpg";
import resort2 from "../../../img/resort2.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";

function Rent() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containner_airplane">
        <div className="content_itemAirplane">
          <div className="container_head_airplane">
            <h3 className="txt_head_airplane">
              <span className="span_Style_airplane"></span>Private car service
            </h3>
          </div>
          <div className="content_image_airplane">
            <div className="group_item_Box_airplane">
              <Link to="/details" className="image">
                <img src={resort2} alt="img" />
              </Link>
              <div className="txt_desc_airplane">
                <h3>Vientiane - Vang Vieng private car service.</h3>
                <Expandable>
                  We will take you comfortably between Vientiane and Vang Vieng.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, quia.
                </Expandable>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
              </div>
            </div>
            <div className="group_item_Box_airplane">
              <Link to="/details1" className="image">
                <img src={car} alt="img" />
              </Link>
              <div className="txt_desc_airplane">
                <h3>Vang Vieng - Vientiane private car service.</h3>
                <Expandable>
                  We will take you comfortably between Vientiane and Vang Vieng.
                </Expandable>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
              </div>
            </div>
            <div className="group_item_Box_airplane">
              <Link to="/details2" className="image">
                <img src={resort2} alt="img" />
              </Link>
              <div className="txt_desc_airplane">
                <h3>Vientiane - Luang Prabang private car service.</h3>
                <Expandable>
                  We will take you comfortably between Vientiane and Luang
                  prabang.
                </Expandable>
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

export default Rent;
