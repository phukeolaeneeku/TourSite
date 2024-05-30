import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/oneday.css";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";
import Swal from "sweetalert2";
import iconImage from "../../../img/iconImage.png";

function Oneday() {
  const [tour_half, setTour_half] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("Tour_half........", tour_half);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/tour/list/",

      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setTour_half(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (tour_half) => {
    if (cart.some((item) => item.id === tour_half.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, tour_half]);

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
      <div className="containnerOneday_body">
        <div className="content_item_Oneday">
          <div className="container_txt_head">
            <h3 className="txt_head_Oneday">
              <span className="span_Styles"></span>Half day tour
            </h3>
          </div>
          <div className="box_container">
            {tour_half
              .filter((half) => {
                console.log("Tour item:", half); // Log each tour item
                return half.category == "half_day";
              })
              .map((half, index) => (
                <div className="box_container_body" key={index}>
                  <Link to="/details" className="container_image">
                    <img src={half.image || iconImage} alt="image" />{" "}
                    {/* Improved alt text */}
                  </Link>
                  <div className="container_des">
                    <h2>{half.name}</h2>
                    <Expandable>{half.description}</Expandable>

                    <div className="txt_oneday">
                      <p className="price_number_one">${half.price}</p>
                    </div>

                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {half.address}
                    </p>

                    <p className="IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(half, index)}
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

export default Oneday;
