import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/details.css";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import iconImage from "../../../img/iconImage.png";

function DetailsGuide() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  console.log("detail...", detail);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/tourapi/guide/detail/${id}/`
        );
        setDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetail();
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (detail) => {
    if (cart.some((item) => item.id === detail.id)) {
      Swal.fire({
        text: "This item is already in the cart!",
        icon: "error",
      });
    } else {
      setCart((prevCart) => [...prevCart, detail]);
      Swal.fire({
        text: "Item added to cart successfully!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <>
        {detail ? (
          <div className="contentBody">
            <div className="boxProduct_deteils">
              <div className="product-page-img">
                <div className="myslides">
                  <img src={detail.image || iconImage} alt="" />
                </div>
              </div>

              <div className="txtContentproduct">
                <h1>{detail.name}</h1>
                <p className="txt_description">{detail.description}</p>
                {/* <div className="price">
                  <p className="price_num">${detail.price}</p>
                </div>
                <p className="SiGooglemaps">
                  <SiGooglemaps id="icon_map" /> {detail.address}
                </p>
                <p className="box_IoMdCart">
                  <IoMdCart
                    id="icon_IoMdCart"
                    onClick={() => handleAddToCart(detail)}
                  />
                </p> */}
              </div>
            </div>

            <div className="content_item_details">
              <div className="container_details">
                <h3 className="htxthead">
                  <span className="spennofStyle"></span>View More
                </h3>
              </div>
              <div className="contentImageDetails">
                {detail.images &&
                  detail.images.map((image, index) => (
                    <div className="group_item_details" key={index}>
                      <div className="img">
                        {console.log(image)}
                        <img src={image || iconImage} alt={`Detail ${index}`} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>

      <Footer />
    </>
  );
}

export default DetailsGuide;
