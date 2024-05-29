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

function Massage() {
  const [massage_list, setMassage_list] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("massage_list........", massage_list);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/ticket/",
    };

    axios
      .request(config)
      .then((response) => {
        setMassage_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (massage_list) => {
    if (cart.some((item) => item.id === massage_list.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, massage_list]);

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
              <span className="span_Style_airplane"></span>Massage
            </h3>
          </div>
          <div className="content_image_airplane">
            {massage_list
              .filter((massage) => massage.category.id === 3)
              .map((massage, index) => (
                <Link
                  to={`/details/${massage.id}`}
                  
                  className="group_item_Box_airplane"
                  key={index}
                >
                  <div className="image">
                    <img src={massage.image || iconImage} alt="img" />
                  </div>
                  <div className="txt_desc_airplane">
                    <h3>{massage.name}</h3>
                    <Expandable>{massage.description}</Expandable>
                    <div className="price">
                      <p className="price_num">${massage.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {massage.address}
                    </p>
                    <p className="box_IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(massage, index)}
                      />
                    </p>
                  </div>
                  {console.log("massage.id.....", massage.id)}

                  
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Massage;
