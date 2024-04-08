import React from "react";
import "./css/account.css";
import { MdDelete } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";
import profile from "../../../img/profile.jpg";
import Header from "../header/Header";
import Menu from "../header/Menu"

export const AccountUser = () => {
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
              <Link to="/forgotpassword" className="menu_icon">
                <IoKeySharp id="icon_more" />
                <p className="txtP">Change password</p>
              </Link>
              <hr className="hr" />
              <div className="menu_icon">
                <IoLogOutOutline id="icon_more" />
                <p className="txtP">Log out </p>
              </div>
              {/* {showConfirmation && (
            <div className="confirmation-popup">
              <p>Are you sure you want to logout?</p>
              <div className="btn_ok_on">
                <button onClick={handleCancelLogout} className="btn_on">
                  No
                </button>
                <button onClick={handleConfirmLogout} className="btn_yes">
                  Yes
                </button>
              </div>
            </div>
          )} */}

              <hr className="hr" />
              <div
                className="menu_icon"
                onClick={() => setShowConfirmationDelete(true)}
              >
                <MdDelete id="icon_more" />
                <p className="txtP">Delete account</p>
              </div>

              {/* {showConfirmationDelete && (
            <div className="confirmation-popup">
              <p>Are you sure you want to Delete?</p>
              <div className="btn_ok_on">
                <button onClick={handleCancelDelete} className="btn_on">
                  No
                </button>
                <button onClick={handleConfirmDelete} className="btn_yes">
                  Yes
                </button>
              </div>
            </div>
          )} */}

              <hr className="hr" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AccountUser;
