import React, { useState, useEffect } from "react";
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
import axios from "axios";

function Oneday() {
  const [tour_golf, setTour_golf] = useState([]);



  console.log("Tour_golf........", tour_golf);

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
        setTour_golf(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            {tour_golf.map((golf, index) => (
              <div className="group_item_Box" key={index}>
                <Link to="/details" className="golf_image">
                  <img src={golf.image} alt="img" />
                </Link>
                <div className="txt_desc">
                  <h3>{golf.name}</h3>
                  <Expandable>{golf.description}</Expandable>
                  <div className="price">
                    <p className="price_num">${golf.price}</p>
                  </div>
                  <p className="SiGooglemaps">
                    <SiGooglemaps id="icon_map" /> {golf.address}
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
