import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/hotel.css";
import { SiGooglemaps } from "react-icons/si";
import hotel1 from "../../../img/hotel1.jpg";
import hotel2 from "../../../img/hotel2.jpg";
import hotel3 from "../../../img/hotel3.jpg";
import { IoMdCart } from "react-icons/io";
import axios from "axios";
import Expandable from "../../../admin/components/managertour/Expandable";
import Swal from "sweetalert2";
import iconImage from "../../../img/iconImage.png";

function HotelSiphandone() {
  const [siphadone, setSiphadone] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("siphadone..", siphadone);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/hotel/",
    };

    axios
      .request(config)
      .then((response) => {
        setSiphadone(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    //Add item to cart
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
    const handleAddToCart = (siphadone) => {
      if (cart.some((item) => item.id === siphadone.id)) {
        Swal.fire({
          text: "This item is already cart!",
          icon: "error",
        });
      } else {
        setCart([...cart, siphadone]);
  
        Swal.fire({
          text: "Add item to cart success!",
          icon: "success",
        });
      }
    };

  return (
    <>
      <Header />
      <Menu />
      <div className="containner_Hotel_bodys">
        <div className="content_item_Hotel">
          <div className="container_txt_head">
            <h3 className="txt_head_Hotel">
              <span className="span_Styles"></span>Siphandone
            </h3>
          </div>
          <div className="box_container_hotels">
            {siphadone
              .filter((sipha) => sipha.category.id === 3)
              .map((sipha, index) => (
                <div className="box_container_body" key={index}>
                  <div className="container_image">
                    <img src={sipha.image || iconImage} alt="image" />
                  </div>
                  <div className="container_des">
                    <h2>{sipha.name}</h2>
                    <Expandable>{sipha.description}</Expandable>
                    <div className="txt_hotel">
                      <p className="price_number_hotel">${sipha.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {sipha.address}
                    </p>
                    <p className="IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(sipha, index)}
                      />
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

export default HotelSiphandone;
