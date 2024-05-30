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
  const [tour_night, setTour_night] = useState([]);

  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("Tour_night........", tour_night);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/tourapi/tour/list/`,
      
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setTour_night(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };



    //Add item to cart
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
    const handleAddToCart = (tour_night) => {
      if (cart.some((item) => item.id === tour_night.id)) {
        Swal.fire({
          text: "This item is already cart!",
          icon: "error",
        });
      } else {
        setCart([...cart, tour_night]);
  
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
              <span className="span_Styles"></span>Night tour
            </h3>
          </div>
          <div className="box_container">
            {tour_night
              .filter((night) => {
                console.log("Tour item:", night); // Log each tour item
                return night.category == "night_tour";
              })
              .map((night, index) => (
                <div className="box_container_body" key={index}>
                  <Link to={`/details/${night.id}`} className="container_image">
                    <img src={night.image || iconImage} alt="image" />
                  </Link>
                  <div className="container_des">
                    <h2>{night.name}</h2>
                    <Expandable>{night.description}</Expandable>

                    <div className="txt_oneday">
                      <p className="price_number_one">${night.price}</p>
                    </div>

                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {night.address}
                    </p>

                    <p className="IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(night, index)}
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
