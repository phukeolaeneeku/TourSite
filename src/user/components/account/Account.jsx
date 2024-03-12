import "./account.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Header from "../header/Header";
import { BiLogOut } from "react-icons/bi";
import user from "../../../img/user.png";
import Menu from "../menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Account = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
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

  //Function Delete
  const handleDeleteAccount = () => {
    let config = {
      method: "delete",
      url: import.meta.env.VITE_API + "/user/my-page",
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        navigate("/"); // Redirect to the home page after successful deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />

      <section id="account" className="accountContainer">
        <div className="account_navbarr">
          <div className="header_boxBack">
            <Link to="/" className="guopIconbAck">
              <FaAngleLeft className="iconnBack" />
              Back
            </Link>
          </div>
          <h2 className="headerTiele">Account</h2>
          <div className="header-box"></div>
        </div>

        <div className="personal-info">
          <div className="profile">
            <div className="box-image">
              <span>
                <img src={user} alt="" />
              </span>
            </div>
            <span className="name">
              Name:{" "}
              <p>
                {JSON.parse(window.localStorage.getItem("user")).user_name ||
                  JSON.parse(window.localStorage.getItem("user")).email}
              </p>
            </span>
          </div>
          <div className="text-info">
            <Link to="/account/general">
              <span>General</span>
              <FaAngleRight />
            </Link>
            <Link to="/account/contact">
              <span>Contact</span>
              <FaAngleRight />
            </Link>
            <Link to="/account/password">
              <span>Password</span>
              <FaAngleRight />
            </Link>
          </div>

          <div className="about-account">
            <Link onClick={() => setShowConfirmation(true)} className="logout">
              <div className="icon-logout">
                <BiLogOut />
              </div>
              <div className="text-logout">Logout</div>
            </Link>
            <Link to="/">Delete account</Link>
          </div>

          {showConfirmation && (
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
          )}
        </div>
      </section>
      <Menu />
    </>
  );
};

export default Account;
