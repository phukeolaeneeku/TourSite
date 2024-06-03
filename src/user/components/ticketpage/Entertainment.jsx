import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import Expandable from "../../../admin/components/managertour/Expandable";
import { SiGooglemaps } from "react-icons/si";
import axios from "axios";
import iconImage from "../../../img/iconImage.png";

function Entertainment() {
  const [entertainment_list, setEntertainment_list] = useState([]);

  console.log("entertainment_list..", entertainment_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/restaurant/list/",
    };

    axios
      .request(config)
      .then((response) => {
        setEntertainment_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <div className="containner_airplane">
        <div className="content_itemAirplane">
          <div className="container_head_airplane">
            <h3 className="txt_head_airplane">
              <span className="span_Style_airplane"></span>Entertainment
            </h3>
          </div>
          <div className="content_image_airplane">
            {entertainment_list
              .filter((entertainment) => entertainment.category == "entertainment")
              .map((entertainment, index) => (
                <div className="group_item_Box_airplane" key={index}>
                  <Link to={`/details-res/${entertainment.id}`} className="image">
                    <img src={entertainment.image || iconImage} alt="img" />
                  </Link>
                  <div className="txt_desc_airplane">
                    <h3>{entertainment.name}</h3>
                    <Expandable>
                      {entertainment.description}
                    </Expandable>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {entertainment.address}
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

export default Entertainment;
