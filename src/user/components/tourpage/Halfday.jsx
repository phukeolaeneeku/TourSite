import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/oneday.css";
import { SiGooglemaps } from "react-icons/si";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";

function Oneday() {
  const [tour_half, setTour_half] = useState([]);

  console.log("Tour_half........", tour_half);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/tour/",
      // url: "http://127.0.0.1:8000/tourapi/tour/",

      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setTour_half(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <div className="containnerOneday_body">
        <div className="content_item_Oneday">
          <div className="container_txt_head">
            <h3 className="txt_head_Oneday">
              <span className="span_Styles"></span>Half day tour
            </h3>
          </div>
          <div className="box_container">
            {tour_half.map((half, index) => (
              <div className="box_container_body" key={index}>
                <Link to="/details" className="container_image">
                  <img src={half.image} alt="image" />
                </Link>
                <div className="container_des">
                  <h2>{half.name}</h2>
                  <Expandable>{half.description}</Expandable>
                  <div className="txt_oneday">
                    <p className="price_number_one">${half.price}</p>
                  </div>
                  <p className="SiGooglemaps">
                    <SiGooglemaps id="icon_map" /> {half.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Oneday;
