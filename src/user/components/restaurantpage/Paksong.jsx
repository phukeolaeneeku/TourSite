import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/restaurant.css";
import Expandable from "../../../admin/components/managertour/Expandable";
import { SiGooglemaps } from "react-icons/si";
import axios from "axios";

function Paksong() {
  const [restaurantPaksong_list, setRestaurantPaksong_list] = useState([]);

  console.log("restaurant_listrestaurant_list", restaurantPaksong_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/restaurant/",
    };

    axios
      .request(config)
      .then((response) => {
        setRestaurantPaksong_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            {restaurantPaksong_list
              .filter((paksong) => paksong.category === 2)
              .map((paksong, index) => (
                <div className="group_item_Box_restaurant" key={index}>
                  <Link to="/details" className="image">
                    <img src={paksong.image} alt="img" />
                  </Link>
                  <div className="txt_desc_restaurant">
                    <h3>{paksong.name}</h3>
                    <Expandable>{paksong.description}</Expandable>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {paksong.address}
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

export default Paksong;
