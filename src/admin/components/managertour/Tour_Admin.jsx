import React, { useState, useEffect } from "react";
import "./css/tour_Admin.css";
import { Link } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
import Expandable from "./Expandable";
import tour_banner from "../../../img/tour_banner.jpg";
import imageicon from "../../../img/imageicon.jpg";

const Tour_Admin = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [datas, setDatas] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);
  const [mainImageBanner, setMainImageBanner] = useState(null);
  const [isPopupimage, setPopupimage] = useState(false);
  const [filteredTour, setFilteredTour] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/tourapi/tour/list/`
      );
      setDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (datas.length > 0) {
      if (filter === "") {
        setFilteredTour(datas);
      } else {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - parseInt(filter));
        const filtered = datas.filter(({ updated_at }) => {
          const updatedAt = new Date(updated_at);
          return updatedAt >= startDate && updatedAt <= endDate;
        });
        setFilteredTour(filtered);
      }
    }
  }, [datas, filter]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://43.202.102.25:8000/tourapi/tour/delete/${id}/`
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Tour deleted successfully!",
      });
      fetchData();
      setShowConfirm(false);
    } catch (error) {
      console.error("Error deleting tour:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete tour. Please try again later.",
      });
    }
  };

  const handleImageBanner = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImageBanner(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePopupimage = () => {
    setPopupimage(!isPopupimage);
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const totalPages = Math.ceil(filteredTour.length / 4);
  const startIndex = (currentPage - 1) * 4;
  const currentTours = filteredTour.slice(startIndex, startIndex + 4);

  const nextPage = () =>
    setCurrentPage((prev) => (prev === totalPages ? totalPages : prev + 1));
  const prevPage = () => setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1));

  return (
    <>
      <AdminMenu />
      <section>
        <div className="box_container_hotel">
          <div className="box_content_hotel">
            <div className="productHead_content">
              <h2 className="htxthead">
                <span className="spennofStyleadmin"></span>Tour
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/addtour-admin" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            <div className="banner_no_box">
              <div className="banner_no_box_image">
                <div className="box_image_banner">
                  {mainImageBanner ? (
                    <img
                      src={URL.createObjectURL(mainImageBanner)}
                      alt="Banner"
                    />
                  ) : (
                    <img src={tour_banner} alt="Banner" />
                  )}
                </div>
              </div>
              <div className="edit_image_banner" onClick={togglePopupimage}>
                <CiCamera id="box_icon_camera" />
              </div>

              {isPopupimage && (
                <form
                  className="background_addproductpopup_box"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="hover_addproductpopup_box_image">
                    <div className="box_input_image">
                      <p>Edit banner image</p>
                      <label className="popup_Border_Boximagae">
                        {mainImageBanner ? (
                          <img
                            src={URL.createObjectURL(mainImageBanner)}
                            alt="Banner"
                          />
                        ) : (
                          <img src={imageicon} alt="Banner" />
                        )}
                        <input
                          type="file"
                          id="img"
                          onChange={handleImageBanner}
                          required
                        />
                      </label>
                    </div>
                    <div className="btn_foasdf">
                      <button
                        className="btn_cancel btn_addproducttxt_popup"
                        onClick={togglePopupimage}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn_confirm btn_addproducttxt_popup"
                        onClick={togglePopupimage}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="box_container_tour">
              {currentTours.length > 0 ? (
                currentTours.map((data, index) => (
                  <div className="box_container_tour_admin" key={index}>
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
                        onClick={() => {
                          setIdToDelete(data.id);
                          setShowConfirm(true);
                        }}
                        className="box_btn_saveDelete"
                      >
                        Delete
                      </div>
                      <Link
                        to={`/edit-tour/${data.id}`}
                        className="box_btn_saveEdit"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tours available</p>
              )}
            </div>

            {filteredTour.length > 4 && (
              <div className="box_container_next_product">
                <button
                  className="box_prev_left_product"
                  disabled={currentPage === 1}
                  onClick={prevPage}
                >
                  <AiOutlineLeft id="box_icon_left_right_product" />
                  <p>Prev</p>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <div className="box_num_product" key={index}>
                    <button
                      className={`num_admin_product ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </div>
                ))}
                <button
                  className="box_prev_right_product"
                  disabled={currentPage === totalPages}
                  onClick={nextPage}
                >
                  <AiOutlineRight id="box_icon_left_right_product" />
                  <p>Next</p>
                </button>
              </div>
            )}

            {showConfirm && (
              <div className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box">
                  <div className="box_logout">
                    <p>Are you sure you want to delete?</p>
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={() => setShowConfirm(false)}
                    >
                      No
                    </button>
                    <button
                      className="btn_confirm btn_addproducttxt_popup"
                      onClick={() => handleDelete(idToDelete)}
                    >
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
};

export default Tour_Admin;
