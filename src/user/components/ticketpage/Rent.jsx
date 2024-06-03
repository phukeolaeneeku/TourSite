import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import Expandable from "../../../admin/components/managertour/Expandable";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import iconImage from "../../../img/iconImage.png";

function Rent() {
  const [rent_list, setRent_list] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("rent_list.....", rent_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/ticket/list/",
    };

    axios
      .request(config)
      .then((response) => {
        setRent_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (rent_list) => {
    if (cart.some((item) => item.id === rent_list.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, rent_list]);

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
      <div className="containner_airplane">
        <div className="content_itemAirplane">
          <div className="container_head_airplane">
            <h3 className="txt_head_airplane">
              <span className="span_Style_airplane"></span>Private car service
            </h3>
          </div>
          <div className="content_image_airplane">
            {rent_list
              .filter((rent) => rent.category == "rent")
              .map((rent, index) => (
                <div className="group_item_Box_airplane" key={index}>
                  <Link to={`/details-rent/${rent.id}`} className="image">
                    <img src={rent.image || iconImage} alt="img" />
                  </Link>
                  <div className="txt_desc_airplane">
                    <h3>Name: {rent.name}</h3>
                    <Expandable>Description: {rent.description}</Expandable>
                    <p>Brand: {rent.brand}</p>
                    <p>Car_number: {rent.carnumber}</p>
                    <div className="price">
                      <p className="price_num">${rent.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {rent.address}
                    </p>
                    <p className="box_IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(rent, index)}
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

export default Rent;
