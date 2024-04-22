import React, { useState } from "react";
import "./css/packageAdmin.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import patusai from "../../../img/patusai.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function PackageAdmin() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <AdminMenu />
      <section>
        <div className="box_container_hotel">
          <div className="box_content_hotel">
            <div className="productHead_content">
              <h2 className="htxthead">
                <span className="spennofStyleadmin"></span>Package
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/addtour-admin" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            <div className="content_hotel_list_box">
              <div className="content_hotel_lists">
                <div className="content_hotel_list2">
                  <div className="box_image_hotel">
                    <img src={patusai} alt="Hotel Image" />
                  </div>
                  <div className="box_description_hotels">
                    <p>Name: </p>
                    <p>Address:</p>
                    <p>Price:</p>
                    <p>Description:</p>
                  </div>
                </div>
                <div className="btn_delete_view">
                  <div
                    onClick={() => setShowConfirmation(true)}
                    className="box_btn_saveDelete"
                  >
                    Delete
                  </div>
                  <Link to="/edit-hotel" className="box_btn_saveEdit">
                    Edit
                  </Link>
                </div>
              </div>
            </div>

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

export default PackageAdmin;
