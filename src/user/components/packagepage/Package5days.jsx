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

function Package5days() {
  const [package5_list, setPackage5_list] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("package5_list.....", package5_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/packet/list/",
    };

    axios
      .request(config)
      .then((response) => {
        setPackage5_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (package5_list) => {
    if (cart.some((item) => item.id === package5_list.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, package5_list]);

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
              <span className="span_Style"></span>Package 5 days
            </h3>
          </div>
          <div className="content_image_Products">
            {package5_list
              .filter((packet) => packet.category == "5days")
              .map((packet, index) => (
                <div className="group_item_Box" key={index}>
                  <Link to={`/details-package/${packet.id}`}  className="image">
                    <img src={packet.image || iconImage} alt="img" />
                  </Link>
                  <div className="txt_desc">
                    <h3>{packet.name}</h3>
                    <Expandable>
                     {packet.description}
                    </Expandable>
                    <div className="price">
                      <p className="price_num">${packet.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {packet.address}
                    </p>
                    <p className="box_IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(packet, index)}
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

export default Package5days;
