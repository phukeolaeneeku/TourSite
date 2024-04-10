import "./adminMenu.css";
import { IoDocumentText, IoLogOutOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import tour_logo from "../../../img/tour_logo.gif";
import { NavLink } from "react-router-dom";
import user from "../../../img/user.png";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageicon from "../../../img/imageicon.jpg";
import { CgWebsite } from "react-icons/cg";
import { RiHotelLine } from "react-icons/ri";
import { IoIosRestaurant } from "react-icons/io";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { GoPackage } from "react-icons/go";

const AdminMenu = () => {
  const [mainImageLogo, setMainImagLogo] = useState(null);

  // Choose logo image
  const [isPopupImageLogo, setPopupImageLogo] = useState(false);

  const togglePopupImageLogo = () => {
    setPopupImageLogo(!isPopupImageLogo);
  };

  ///Choose image handleImageLogo
  const handleImageLogo = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setMainImagLogo([file]);
      };

      reader.readAsDataURL(file);
    }
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    return;
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };


  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            <NavLink to="/dashboard" className="link">
              <RxDashboard id="icon_das_pro_use_logout"/>
              <p className="txtP">Dashboard</p>
            </NavLink>
            <NavLink to="/tour-admin" className="link">
              <CgWebsite id="icon_das_pro_use_logout"/>
              <p className="txtP">Tour</p>
            </NavLink>
            <NavLink to="/" className="link">
              <RiHotelLine id="icon_das_pro_use_logout"/>
              <p className="txtP">Hotel</p>
            </NavLink>
            <NavLink to="/" className="link">
              <IoIosRestaurant id="icon_das_pro_use_logout"/>
              <p className="txtP">Restaurant</p>
            </NavLink>
            <NavLink to="/" className="link">
              <BsFillTicketDetailedFill id="icon_das_pro_use_logout"/>
              <p className="txtP">Ticket</p>
            </NavLink>
            <NavLink to="/" className="link">
              <GoPackage id="icon_das_pro_use_logout"/>
              <p className="txtP">Package</p>
            </NavLink>
            
            <NavLink to="/users" className="link">
              <BiUser id="icon_das_pro_use_logout"/>
              <p className="txtP">Users</p>
            </NavLink>
            <NavLink to="/" className="link">
              <LiaUserCogSolid id="icon_das_pro_use_logout"/>
              <p className="txtP">Admins</p>
            </NavLink>
            <div onClick={() => setShowConfirmation(true)} className="link">
              <IoLogOutOutline id="icon_das_pro_use_logout"/>
              <p className="txtP">Log Out</p>
            </div>
            {showConfirmation && (
              <div className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box">
                  <div className="box_logout">
                    <p>Are you sure you want to log out?</p>
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={handleCancelLogout}
                    >
                      No
                    </button>
                    <button
                      className="btn_confirm btn_addproducttxt_popup"
                      onClick={handleConfirmLogout}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="right">
            <div className="box_popupImage_logo">
              <NavLink to="/" className="logo">
                <img src={tour_logo} alt="" />
              </NavLink>
              {/* <p className="txtName">Humascot</p> */}
              <div className="popup_image_logo" onClick={togglePopupImageLogo}>
                <CiCamera id="box_icon_camera" />
              </div>
              {isPopupImageLogo && (
                <form className="background_addproductpopup_box">
                  <div className="hover_addproductpopup_box_image">
                    <div className="box_input_image">
                      <p>Edit Logo image</p>
                      <label className="popup_Border_Boximagae">
                        {mainImageLogo && mainImageLogo.length > 0 ? (
                          <img
                            src={URL.createObjectURL(mainImageLogo[0])}
                            alt="category"
                          />
                        ) : (
                          <img src={imageicon} alt="category" />
                        )}
                        <input
                          type="file"
                          id="img"
                          onChange={handleImageLogo}
                          required
                        />
                        <p className="box_choose_image">이미지 선택</p>
                      </label>
                    </div>
                    <div className="btn_foasdf">
                      <button
                        className="btn_cancel btn_addproducttxt_popup"
                        onClick={togglePopupImageLogo}
                      >
                        Cancel
                      </button>
                      <button className="btn_confirm btn_addproducttxt_popup">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
            <div className="boximage_admin">
              <NavLink to="/account-admin" className="userAdminImage">
                <p>Name admin</p>
                <img src={user} alt="admin profile" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;