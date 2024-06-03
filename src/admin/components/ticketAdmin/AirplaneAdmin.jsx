import React, { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import airplane1 from "../../../img/airplane1.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Expandable from "../managertour/Expandable";

function AirplaneAdmin() {
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
                <span className="spennofStyleadmin"></span>Airplane
              </h2>
              <div className="categoryBoxfiler">
                <Link to="/add_ticket" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            <div className="box_container_tour">
              <div className="box_container_btn">
                <button></button>
              </div>
              <div className="box_container_tour_admin">
                <div className="container_image_tour">
                  <img src={airplane1} alt="image" />
                </div>
                <div className="container_desc_tour">
                  <h3>Name: Patusai </h3>
                  <Expandable>
                    Description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Distinctio cupiditate blanditiis veniam
                    voluptates sequi pariatur voluptatibus, natus mollitia est
                    unde illo at nostrum, culpa labore aperiam delectus
                    doloribus ut autem!
                  </Expandable>

                  <div className="txt_tour">
                    <p className="price_number_ones">Prices: $100</p>
                  </div>

                  <p className="txt_address">Address: Vangvieg</p>
                </div>
                <div className="btn_delete_view">
                  <div
                    onClick={() => setShowConfirmation(true)}
                    className="box_btn_saveDelete"
                  >
                    Delete
                  </div>
                  <Link to="/edit-ticket" className="box_btn_saveEdit">
                    Edit
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="box_container_next_product">
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
            </div> */}

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

export default AirplaneAdmin;
