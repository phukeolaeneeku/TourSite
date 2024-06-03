import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/lao.css";
import { SiGooglemaps } from "react-icons/si";
import korean from "../../../img/korean.jpg";
import Menu from "../header/Menu";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";
import Swal from "sweetalert2";

function Lao() {
  const [laotain, setLaotain] = useState([]);
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
        setLaotain(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Menu />
      <div className="containner_laotian_body">
        <div className="content_item_laotian">
          <div className="container_laotian">
            <h3 className="txt_span_laotian">
              <span className="span_Styles"></span>Laotian
            </h3>
          </div>
          <div className="box_container_laotian">
            {laotain
              .filter((lao) => lao.category == "Lao")
              .map((lao, index) => (
                <div className="box_container_laotian_body" key={index}>
                  <Link
                    to={`/details-guide/${lao.id}`}
                    className="container_laotian_image"
                  >
                    <img src={lao.image || iconImage} alt="image" />
                  </Link>
                  <div className="container_laotian_desc">
                    <h2>{lao.name}</h2>
                    <Expandable>{lao.description}</Expandable>
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

export default Lao;
