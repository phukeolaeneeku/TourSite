import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/oneday.css";
import { SiGooglemaps } from "react-icons/si";
import Menu from "../header/Menu";
import axios from "axios";
import { IoMdCart } from "react-icons/io";
import Expandable from "../../../admin/components/managertour/Expandable";
import Swal from "sweetalert2";

function Oneday() {
  const [tour, setTour] = useState([]);

  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("Tour........", tour);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/tour/",
    };

    axios
      .request(config)
      .then((response) => {
        setTour(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (tour) => {
    if (cart.some((item) => item.id === tour.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, tour]);

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
              <span className="span_Styles"></span>One day tour
            </h3>
          </div>

          <div className="box_container">
            {tour
              .filter((i) => {
                console.log("Tour item:", i); // Log each tour item
                return i.category === 1;
              })
              .map((i, index) => (
                <div className="box_container_body" key={index}>
                  <Link to="/details" className="container_image">
                    <img src={i.image} alt="image" /> {/* Improved alt text */}
                  </Link>
                  <div className="container_des">
                    <h2>{i.name}</h2>
                    <Expandable>{i.description}</Expandable>

                    <div className="txt_oneday">
                      <p className="price_number_one">${i.price}</p>
                    </div>

                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {i.address}
                    </p>
                    <p className="IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(i, index)}
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
