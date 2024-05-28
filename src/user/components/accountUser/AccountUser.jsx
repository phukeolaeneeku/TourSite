import React from "react";
import "./css/account.css";
import { MdDelete } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";
import profile from "../../../img/profile.jpg";
import Header from "../header/Header";
import Menu from "../header/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccountUser = () => {
  // handleLog out
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

  // handleLog out
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    // Add your delete account logic here
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <Header />
      <Menu />
      <section>
        <div className="container_account">
          <h3>Setting Account</h3>
          <div className="MorePage">
            <div className="profile_box">
              <div className="left_box">
                <img src={profile} alt="" />
                <div className="user_name">Name:</div>
              </div>
              <Link to="/profile-user" className="right_box">
                <button>View</button>
              </Link>
            </div>

            <hr className="hr" />
            <div className="more-menu-list">
              <Link to="#" className="menu_icon">
                <MdOutlinePrivacyTip id="icon_more" />
                <p className="txtP">Terms of use</p>
              </Link>
              <hr className="hr" />
              <Link to="#" className="menu_icon">
                <MdOutlinePrivacyTip id="icon_more" />
                <p className="txtP">Privay Policy</p>
              </Link>
              <hr className="hr" />
              <div
                onClick={() => setShowConfirmation(true)}
                className="menu_icon"
              >
                <IoLogOutOutline id="icon_more" />
                <p className="txtP">Log out </p>
              </div>
              <hr className="hr" />
              <div onClick={() => setShowDeleteConfirmation(true)} className="menu_icon">
                <MdDelete id="icon_more" />
                <p className="txtP">Delete account</p>
              </div>
              <hr className="hr" />
              

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
              
              {showDeleteConfirmation && (
                <div className="background_addproductpopup_box">
                  <div className="hover_addproductpopup_box">
                    <div className="box_logout">
                      <p>Are you sure you want to delete your account?</p>
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
                        onClick={handleConfirmDelete}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AccountUser;
