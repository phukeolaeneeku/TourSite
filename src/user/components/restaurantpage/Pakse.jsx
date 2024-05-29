import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/restaurant.css";
import Expandable from "../../../admin/components/managertour/Expandable";
import { SiGooglemaps } from "react-icons/si";
import axios from "axios";
import iconImage from "../../../img/iconImage.png";

function Pakse() {
  const [restaurant_list, setRestaurant_list] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/restaurant/",
    };

    axios
      .request(config)
      .then((response) => {
        setRestaurant_list(response.data);
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
              <span className="span_Style_restaurant"></span>Pakse
            </h3>
          </div>
          <div className="content_image_restaurant">
            {restaurant_list
              .filter((res) => res.category.id === 1)
              .map((res, index) => (
                <div className="group_item_Box_restaurant" key={index}>
                  <Link to="/details" className="image">
                    <img src={res.image || iconImage} alt="img" />
                  </Link>
                  <div className="txt_desc_restaurant">
                    <h3>{res.name}</h3>
                    <Expandable>{res.description}</Expandable>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {res.address}
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

export default Pakse;
