import React, { useState, useEffect } from "react";
import "./css/hotel.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import hotel2 from "../../../img/hotel2.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";
import Swal from "sweetalert2";

function Hotel() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [datas, setDatas] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null); // Added state to hold ID of hotel to delete

  const [filteredHotel, setFilteredHotel] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    fetchData();
  }, []);

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

  const handleDelete = async (id) => {
    // Modified handleDelete to take id parameter
    try {
      await axios.delete(
        `http://43.202.102.25:8000/tourapi/hotel/delete/${id}/`
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Hotel deleted successfully!",
      });
      // After successful delete, refetch data
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

//////////////////////
  useEffect(() => {
    if (datas.length > 0) {
      if (filter === "") {
        setFilteredHotel(datas);
      } else {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - parseInt(filter));
        const filtered = datas.filter(({ updated_at }) => {
          const updatedAt = new Date(updated_at);
          return updatedAt >= startDate && updatedAt <= endDate;
        });
        setFilteredHotel(filtered);
      }
    }
  }, [datas, filter]);


  const handlePageChange = (page) => setCurrentPage(page);
  const totalPages = Math.ceil(filteredHotel.length / 4);
  const startIndex = (currentPage - 1) * 4;
  const currentHotels = filteredHotel.slice(startIndex, startIndex + 4);

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
                <span className="spennofStyleadmin"></span>Hotel
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/add-hotel" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            <div className="box_container_tour">
              {currentHotels.length > 0 ? (
                currentHotels.map((data, index) => (
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
                        to={`/edit-hotel/${data.id}`}
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

            {filteredHotel.length > 4 && (
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
                      className="btn_confirm btn_addproducttxt_popup"
                      onClick={() => handleDelete(idToDelete)} // Pass idToDelete to handleDelete
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

export default Hotel;
