import "./css/hotel.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import hotel_pakse3 from "../../../img/hotel_pakse3.jpg";

function Hotel() {
  return (
    <>
      <AdminMenu />
      <section>
        <div className="box_container_hotel">
          <div className="box_content_hotel">
            <div className="productHead_content">
              <h3 className="htxthead">
                <span className="spennofStyleadmin"></span>Hotel
              </h3>
              <div className="categoryBoxfiler">
                <Link to="/addtour-admin" className="box_add_product">
                  <BiPlus id="icon_add_product" />
                  <p>Add</p>
                </Link>
              </div>
            </div>

            <div className="content_hotel_list_box">
              <div className="content_hotel_list">
                <div className="content_hotel_list2">
                  <div className="box_image_hotel">
                    <img src={hotel_pakse3} alt="Hotel Image" />
                  </div>
                  <div className="box_description_hotel">
                    <p>Name:</p>
                    <p>Address:</p>
                    <p>Price:</p>
                    <p>Description:</p>
                  </div>
                </div>
                <Link to="/edit-hotel" className="box_btn_saveEdit">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotel;
