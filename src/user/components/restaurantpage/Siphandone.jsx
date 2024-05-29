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

function Siphandone() {
  const [restaurantSiphandone_list, setRestaurantSiphandone_list] = useState([]);

  console.log("restaurantSiphandone_list..", restaurantSiphandone_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/restaurant/",
    };

    axios
      .request(config)
      .then((response) => {
        setRestaurantSiphandone_list(response.data);
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
              <span className="span_Style_restaurant"></span>Siphandone
            </h3>
          </div>
          <div className="content_image_restaurant">
            {restaurantSiphandone_list
              .filter((res_siphandone) => res_siphandone.category.id === 3)
              .map((res_siphandone, index) => (
                <div className="group_item_Box_restaurant" key={index}>
                  <Link to="/details" className="image">
                    <img src={res_siphandone.image || iconImage} alt="img" />
                  </Link>
                  <div className="txt_desc_restaurant">
                    <h3>{res_siphandone.name}</h3>
                    <Expandable>{res_siphandone.description}</Expandable>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {res_siphandone.address}
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

export default Siphandone;
