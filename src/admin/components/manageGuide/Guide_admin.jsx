import React, { useEffect, useState } from "react";
import "./css/guide_admin.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import korean from "../../../img/korean.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Expandable from "../../../admin/components/managertour/Expandable";
import axios from "axios";

const Guide_admin = () => {
  const [datas, setDatas] = useState([]);
  const [guideID, setGuideID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [filteredGuide, setFilteredGuide] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  console.log(guideID);

  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching data
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: import.meta.env.VITE_API + `/tourapi/guide/list/`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          setDatas(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false after data is fetched
    }
  }, [datas]);

  const deleteGuide = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      import.meta.env.VITE_API + `/tourapi/guide/delete/${guideID}/`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        alert("success");
        setShowConfirmation(false);
        setGuideID(null);
      })
      .catch((error) => console.error(error));
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  useEffect(() => {
    if (datas.length > 0) {
      if (filter === "") {
        setFilteredGuide(datas);
      } else {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - parseInt(filter));
        const filtered = datas.filter(({ updated_at }) => {
          const updatedAt = new Date(updated_at);
          return updatedAt >= startDate && updatedAt <= endDate;
        });
        setFilteredGuide(filtered);
      }
    }
  }, [datas, filter]);

  const handlePageChange = (page) => setCurrentPage(page);
  const totalPages = Math.ceil(filteredGuide.length / 4);
  const startIndex = (currentPage - 1) * 4;
  const currentGuides = filteredGuide.slice(startIndex, startIndex + 4);

  const nextPage = () =>
    setCurrentPage((prev) => (prev === totalPages ? totalPages : prev + 1));
  const prevPage = () => setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1));

  return (
    <>
      <AdminMenu />
      <section>
        <div className="box_container_guide">
          <div className="box_content_guide">
            <div className="GuideHead_content">
              <h2 className="text-head-guide">
                <span className="spennofStyleadmin"></span>Korean
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/add-guide" className="box_add_guide">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              currentGuides.map((data, index) => (
                <div className="box_container_tourguide" key={index}>
                  <div className="box_container_tourguide_admin">
                    <div className="container_image_tourguide">
                      <img src={data.image} alt="image" />
                    </div>
                    <div className="container_desc_tourguide">
                      <h3>Name Guide: {data.name} </h3>
                      <Expandable>{data.description}</Expandable>
                    </div>
                    <div className="btn_delete_view">
                      <div
                        onClick={() => {
                          setShowConfirmation(true);
                          setGuideID(data.id);
                        }}
                        className="box_btn_saveDelete"
                      >
                        Delete
                      </div>
                      <Link
                        to={`/edit-guide/${data.id}`}
                        className="box_btn_saveEdit"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}

            {filteredGuide.length > 4 && (
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

            {showConfirmation && (
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
                      onClick={deleteGuide}
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

export default Guide_admin;
