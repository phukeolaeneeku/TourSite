import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/korean.css";
import { SiGooglemaps } from "react-icons/si";
import korean from "../../../img/korean.jpg";
import Menu from "../header/Menu";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";
import Swal from "sweetalert2";

function Korean() {
  const [korea, setKorea] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/tourapi/guide/list/`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setKorea(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          {korea
            .filter((korea) => korea.category == "Korea")
            .map((korea, index) => (
              <div className="box_container_korean_body" key={index}>
                <Link
                  to={`/details-guide/${korea.id}`}
                  className="container_korean_image"
                >
                  <img src={korea.image || iconImage} alt="image" />
                </Link>
                <div className="container_korean_desc">
                  <h2>{korea.name}</h2>
                  <Expandable>{korea.description}</Expandable>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Korean;
