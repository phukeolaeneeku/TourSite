import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import guide from "../../../img/guide.jpg";
import massage1 from "../../../img/massage1.jpg";
import massage2 from "../../../img/massage2.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";
import { SiGooglemaps } from "react-icons/si";
import axios from "axios";

function Massage() {
  const [massage_list, setMassage_list] = useState([]);

  console.log("massage_list........", massage_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/ticket/",
    };

    axios
      .request(config)
      .then((response) => {
        setMassage_list(response.data);
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
              <span className="span_Style_airplane"></span>Massage
            </h3>
          </div>
          <div className="content_image_airplane">
            {massage_list
              .filter((massage) => massage.category === 3)
              .map((massage, index) => (
                <div className="group_item_Box_airplane" key={index}>
                  <Link to="/details" className="image">
                    <img src={massage.image} alt="img" />
                  </Link>
                  <div className="txt_desc_airplane">
                    <h3>{massage.name}</h3>
                    <Expandable>
                      {massage.description}
                    </Expandable>
                    <div className="price">
                      <p className="price_num">${massage.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {massage.address}
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

export default Massage;
