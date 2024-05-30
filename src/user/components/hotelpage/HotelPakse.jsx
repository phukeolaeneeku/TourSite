import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/hotel.css";
import { SiGooglemaps } from "react-icons/si";
import hotel3 from "../../../img/hotel3.jpg";
import { IoMdCart } from "react-icons/io";
import axios from "axios";
import Expandable from "../../../admin/components/managertour/Expandable";
import Swal from "sweetalert2";
import iconImage from "../../../img/iconImage.png";

function HotelPakse() {
  const [hotelPakse, setHotelPakse] = useState([]);
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
      url: import.meta.env.VITE_API + `/tourapi/hotel/list/`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setHotelPakse(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (hotelPakse) => {
    if (cart.some((item) => item.id === hotelPakse.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, hotelPakse]);

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
              <span className="span_Styles"></span>Pakse
            </h3>
          </div>

          <div className="box_container_hotels">
            {hotelPakse
              .filter((pakse) => pakse.category == "pakse")
              .map((pakse, index) => (
                <div className="box_container_body_hotel" key={index}>
                  <div className="container_image">
                    <img src={pakse.image || iconImage} alt="image" />
                  </div>
                  <div className="container_desc">
                    <h2>{pakse.name}</h2>
                    <Expandable>{pakse.description}</Expandable>
                    <div className="txt_hotel">
                      <p className="price_number_hotel">${pakse.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {pakse.address}
                    </p>
                    <p className="IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(pakse, index)}
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

export default HotelPakse;
