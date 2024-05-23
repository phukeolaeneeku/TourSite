import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/golf.css";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
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
    };

    axios
      .request(config)
      .then((response) => {
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
            {tour_golf
              .filter((golf) => {
                console.log("Tour item:", golf); // Log each tour item
                return golf.category === 4;
              })
              .map((golf, index) => (
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

                    <p className="IoMdCart">
                      <IoMdCart id="icon_IoMdCart" />
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
