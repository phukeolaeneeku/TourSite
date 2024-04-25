import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/oneday.css";
import { IoIosArrowBack } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import motorcycle from "../../../img/motorcycle.jpg";
import Menu from "../header/Menu";
import Expandable from "../../../admin/components/managertour/Expandable"

function Oneday() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containnerOneday_body">
        <div className="content_item_Oneday">
          <div className="container_txt_head">
            <h3 className="txt_head_Oneday">
              <span className="span_Styles"></span>One day tour
            </h3>
          </div>
          <div className="box_container">
            <div className="box_container_body">
              <Link to="/details" className="container_image">
                <img src={thadluang} alt="image" />
              </Link>
              <div className="container_des">
                <h2>Vientiane</h2>
                <Expandable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, modi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Explicabo, modi! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Explicabo, modi!
                </Expandable>

                <div className="txt_oneday">
                  <p className="price_number_one">$10</p>
                  <p className="txt_price"> ￦15,000 </p>
                </div>

                <p className="SiGooglemaps">
                  <SiGooglemaps id="icon_map" /> Vientiane
                </p>
                <p>Review: 220</p>
              </div>
            </div>
            <div className="box_container_body">
              <div className="container_image">
                <img src={motorcycle} alt="image" />
              </div>
              <div className="container_des">
                <h2>Vang Vieng</h2>
                <Expandable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, modi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Explicabo, modi! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Explicabo, modi!
                </Expandable>

                <div className="txt_oneday">
                  <p className="price_number_one">$10</p>
                  <p className="txt_price"> ￦15,000 </p>
                </div>

                <p className="SiGooglemaps">
                  <SiGooglemaps id="icon_map" /> Vang Vieng
                </p>
                <p>Review: 150</p>
              </div>
            </div>
            <div className="box_container_body">
              <div className="container_image">
                <img src={patusai} alt="image" />
              </div>
              <div className="container_des">
                <h2>Vientiane</h2>
                <Expandable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, modi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </Expandable>
                <div className="txt_oneday">
                  <p className="price_number_one">$10</p>
                  <p className="txt_price"> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps">
                  <SiGooglemaps id="icon_map" /> Vientiane
                </p>
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
