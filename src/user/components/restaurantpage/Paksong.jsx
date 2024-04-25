import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/restaurant.css";
import recommended2 from "../../../img/recommended2.jpg";
import resort3 from "../../../img/resort3.jpg";
import Restaurant_paksong from "../../../img/Restaurant_paksong.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";

function Pakse() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containner_Hotel_restaurant">
        <div className="content_itemRestaurant">
          <div className="container_head_restaurant">
            <h3 className="txt_head_restaurant">
              <span className="span_Style_restaurant"></span>Paksong
            </h3>
          </div>
          <div className="content_image_restaurant">
            <div className="group_item_Box_restaurant">
              <Link to="/details" className="image">
                <img src={resort3 } alt="img" />
              </Link>
              <div className="txt_desc_restaurant">
                <h3>Pakse</h3>
                <Expandable>
                  We will take you to Kuang Si Falls safely and comfortably.
                  
                </Expandable>
              </div>
            </div>
            <div className="group_item_Box_restaurant">
              <Link to="/details" className="image">
                <img src={Restaurant_paksong} alt="img" />
              </Link>
              <div className="txt_desc_restaurant">
                <h3>Paksong</h3>
                <Expandable>
                  We will take you to Kuang Si Falls safely and comfortably.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  eligendi.
                </Expandable>
              </div>
            </div>
            <div className="group_item_Box_restaurant">
              <Link to="/details" className="image">
                <img src={recommended2} alt="img" />
              </Link>
              <div className="txt_desc_restaurant">
                <h3>Siphandone</h3>
                <Expandable>
                  We will take you to Kuang Si Falls safely and comfortably.
                </Expandable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pakse;
