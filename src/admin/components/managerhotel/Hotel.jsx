import React, { useState, useEffect } from "react";
import "./css/hotel.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import hotel2 from "../../../img/hotel2.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";

function Hotel() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(datas);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/tourapi/hotel/list/`
      );
      setDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <>
      <AdminMenu />
      <section>
        <div className="box_container_hotel">
          <div className="box_content_hotel">
            <div className="productHead_content">
              <h2 className="htxthead">
                <span className="spennofStyleadmin"></span>Hotel
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/add-hotel" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>
            {datas.length > 0 ? (
              datas.map((data, index) => (
                <div className="box_container_tour" key={index}>
                  <div className="box_container_tour_admin">
                    <div className="container_image_tour">
                      <img src={data.image} alt="image" />
                    </div>
                    <div className="container_desc_tour">
                      <h3>{data.name}</h3>
                      <Expandable>{data.description}</Expandable>
                      <div className="txt_tour">
                        <p className="price_number_ones">
                          Prices: ${data.price}
                        </p>
                      </div>
                      <p className="txt_address">Address: {data.address}</p>
                    </div>
                    <div className="btn_delete_view">
                      <div
                        onClick={handleCancelDelete}
                        className="box_btn_saveDelete"
                      >
                        Delete
                      </div>
                      <Link to="/edit-tour" className="box_btn_saveEdit">
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No tours available</p>
            )}

            <div className="box_container_next_product">
              <button className="box_prev_left_product">
                <AiOutlineLeft id="box_icon_left_right_product" />
                <p>Prev</p>
              </button>

              <div className="box_num_product">
                <div className="num_admin_product">
                  <p>1</p>
                </div>
                <div className="num_admin_product">
                  <p>2</p>
                </div>
              </div>

              <button className="box_prev_right_product">
                <p>Next</p>
                <AiOutlineRight id="box_icon_left_right_product" />
              </button>
            </div>

            {showConfirm && (
              <div className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box">
                  <div className="box_logout">
                    <p>Are you sure you want to delete?</p>
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={handleCancelDelete}
                    >
                      No
                    </button>
                    <button className="btn_confirm btn_addproducttxt_popup">
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotel;
