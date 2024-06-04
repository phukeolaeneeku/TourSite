import React, { useState, useEffect } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import airplane1 from "../../../img/airplane1.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Expandable from "../managertour/Expandable";
import axios from "axios";
import Swal from "sweetalert2";
function RentAdmin() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [datas, setDatas] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null); // Added state to hold ID of hotel to delete

  const [filteredRent, setFilteredRent] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(datas);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/tourapi/ticket/list/`
      );
      setDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (datas.length > 0) {
      if (filter === "") {
        setFilteredRent(datas);
      } else {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - parseInt(filter));
        const filtered = datas.filter(({ updated_at }) => {
          const updatedAt = new Date(updated_at);
          return updatedAt >= startDate && updatedAt <= endDate;
        });
        setFilteredRent(filtered);
      }
    }
  }, [datas, filter]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://43.202.102.25:8000/tourapi/ticket/delete/${id}/`
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Hotel deleted successfully!",
      });
      fetchData();
      setShowConfirm(false); // Close confirmation dialog
    } catch (error) {
      console.error("Error deleting hotel:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete hotel. Please try again later.",
      });
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };


  const handlePageChange = (page) => setCurrentPage(page);
  const totalPages = Math.ceil(filteredRent.length / 4);
  const startIndex = (currentPage - 1) * 4;
  const currentRents = filteredRent.slice(startIndex, startIndex + 4);

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
                <span className="spennofStyleadmin"></span>Rent car
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/add-rent" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            <div className="box_container_tour">
              {currentRents.length > 0 ? (
                currentRents.map((data, index) => (
                  <div className="box_container_tour_admin" key={index}>
                    <div className="container_image_tour">
                      <img src={data.image} alt="image" />
                    </div>
                    <div className="container_desc_tour">
                      <h3>{data.name}</h3>
                      <Expandable>{data.description}</Expandable>
                      <div className="txt_tour">
                        <p className="price_number_ones">
                          Prices: $ {data.price}
                        </p>
                      </div>
                      <div className="txt_tour">
                        <p className="txt_brand_car">Brand: {data.brand}</p>
                      </div>
                      <div className="txt_tour">
                        <p className="txt_brand_car">
                          Car number:{data.carnumber}
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
                        to={`/edit-rent/${data.id}`}
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

            {filteredRent.length > 4 && (
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
                      onClick={handleCancelDelete}
                    >
                      No
                    </button>
                    <button
                      onClick={() => handleDelete(idToDelete)}
                      className="btn_confirm btn_addproducttxt_popup"
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
}

export default RentAdmin;
