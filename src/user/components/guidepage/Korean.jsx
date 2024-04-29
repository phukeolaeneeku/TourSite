import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/korean.css";
import { SiGooglemaps } from "react-icons/si";
import korean from "../../../img/korean.jpg";
import Menu from "../header/Menu";
import Expandable from "../../../admin/components/managertour/Expandable"

function Korean() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containner_korean_body">
        <div className="content_item_korean">
          <div className="container_korean">
            <h3 className="txt_span_korean">
              <span className="span_Styles"></span>Korean
            </h3>
          </div>
          <div className="box_container_korean">
            <div className="box_container_korean_body">
              <Link to="/details" className="container_korean_image">
                <img src={korean} alt="image" />
              </Link>
              <div className="container_korean_desc">
                <h2>Korean</h2>
                <Expandable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, modi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Explicabo, modi! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Explicabo, modi!
                </Expandable>

                <p className="SiGooglemaps">
                  <SiGooglemaps id="icon_map" /> Korean
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

export default Korean;
