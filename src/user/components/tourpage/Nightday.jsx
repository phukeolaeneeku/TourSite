import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/oneday.css";
import { SiGooglemaps } from "react-icons/si";
import night_vientiane2 from "../../../img/night_vientiane2.jpg";
import night_vangvieng from "../../../img/night_vangvieng.jpg";
import night_luangphabang from "../../../img/night_luangphabang.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";

function Oneday() {
  const [tour_night, setTour_night] = useState([]);

  console.log("Tour_night........", tour_night);

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
        setTour_night(response.data);
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
              <span className="span_Styles"></span>Night tour
            </h3>
          </div>
          <div className="box_container">
            {tour_night.map((night, index) => (
              <div className="box_container_body" key={index}>
                <Link to="/details" className="container_image">
                  <img src={night.image} alt="image" />
                </Link>
                <div className="container_des">
                  <h2>{night.name}</h2>
                  <Expandable>{night.description}</Expandable>
                  <p className="SiGooglemaps">
                    <SiGooglemaps id="icon_map" /> {night.address}
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
