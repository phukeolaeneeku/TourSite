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
import axios from "axios";
import Swal from "sweetalert2";

export const AccountUser = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
  const userID = localStorage.getItem("userID");
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

  const handleConfirmDelete = () => {
    handleDeleteAccount();
    setShowConfirmationDelete(false);
  };
  const handleCancelDelete = () => {
    setShowConfirmationDelete(false);
  };

  const user = localStorage.getItem("user");

  //Function Delete
  const handleDeleteAccount = async () => {
    try {
      const config = {
        method: "delete",
        url: `${import.meta.env.VITE_API}/users/userviewpage/`, // Assuming your API URL is stored in environment variables
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token for authentication
        },
      };

      const response = await axios(config);
      if (response.status === 204) {
        // Account deleted successfully
        // alert("Account deleted successfully");
        Swal.fire({
          text: "Account deleted successfully.",
          icon: "success",
        });
        console.log("Account deleted successfully");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
        // Perform any other actions (e.g., redirect to home page)
      } else {
        console.error("Failed to delete account:", response.data.message);
        alert("Failed to delete account:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
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
                {JSON.parse(window.localStorage.getItem("user")).image !=
                false ? (
                  <img
                    src={JSON.parse(window.localStorage.getItem("user")).image}
                    alt=""
                  />
                ) : (
                  <img src={profile} alt="" />
                )}
                <div className="user_name">
                  Name:{" "}
                  {JSON.parse(window.localStorage.getItem("user")).user_name ||
                    null}
                </div>
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

              <div
                onClick={() => setShowConfirmationDelete(true)}
                className="menu_icon"
              >
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

              {showConfirmationDelete && (
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
