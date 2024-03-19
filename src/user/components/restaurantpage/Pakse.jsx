import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/restaurant.css";
import { IoIosArrowBack } from "react-icons/io";
import recommended2 from "../../../img/recommended2.jpg";
import resort3 from "../../../img/resort3.jpg";

function Pakse() {
  return (
    <>
      <Header />
      <div className="containner_Hotel_restaurant">
        <Link to="/" className="back_icons_back_restaurant">
          <IoIosArrowBack />
          <p>Back</p>
        </Link>
        <div className="content_itemRestaurant">
            <div className="container_head_restaurant">
                <h3 className="txt_head_restaurant">
                  <span className="span_Style_restaurant"></span>Restaurant
                </h3>
            </div>
            <div className="content_image_restaurant">
                <div className="group_item_Box_restaurant">
                  <Link to="/details" className="image">
                    <img src={recommended2} alt="img" />
                  </Link>
                  <div className="txt_desc_restaurant">
                    <h3>Pakse</h3>
                    <p>
                      We will take you to Kuang Si Falls safely and comfortably.
                    </p>
                  </div>
                </div>
                <div className="group_item_Box_restaurant">
                  <Link to="/details" className="image">
                    <img src={resort3} alt="img" />
                  </Link>
                  <div className="txt_desc_restaurant">
                    <h3>Paksong</h3>
                    <p>
                      We will take you to Kuang Si Falls safely and comfortably.
                    </p>
                  </div>
                </div>
                <div className="group_item_Box_restaurant">
                  <Link to="/details" className="image">
                    <img src={recommended2} alt="img" />
                  </Link>
                  <div className="txt_desc_restaurant">
                    <h3>Siphandone</h3>
                    <p>
                      We will take you to Kuang Si Falls safely and comfortably.
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

export default Pakse;
