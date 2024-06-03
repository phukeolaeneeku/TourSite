import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/package.css";
import Expandable from "../../../admin/components/managertour/Expandable";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import iconImage from "../../../img/iconImage.png";

function Package() {
  const [package_list, setPackage_list] = useState([]);

  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("package_list.....", package_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/packet/list/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setPackage_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (package_list) => {
    if (cart.some((item) => item.id === package_list.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, package_list]);

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
      <div className="containnergolf_body">
        <div className="content_itemGolf">
          <div className="container_head">
            <h3 className="txt_head">
              <span className="span_Style"></span>Package 3 days
            </h3>
          </div>
          <div className="content_image_Products">
            {package_list
              .filter((i) => {
                console.log("Tour item:", i); // Log each tour item
                return i.category == "3days";
              })
              .map((i, index) => (
                <div className="group_item_Box" key={index}>
                  <Link to={`/details/${i.id}`} className="image">
                    <img src={i.image || iconImage} alt="img" />{" "}
                  </Link>
                  <div className="txt_desc">
                    <h3>{i.name}</h3>
                    <h3>{i.id}</h3>
                    <Expandable>
                      {i.description}
                    </Expandable>
                    <div className="price">
                      <p className="price_num">${i.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {i.address}
                    </p>
                    <p className="box_IoMdCart">
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

export default Package;
