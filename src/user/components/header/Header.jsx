import React, { useState, useEffect } from "react";
import "./css/header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import tour_logo from "../../../img/tour_logo.gif";
import { IoMdCart } from "react-icons/io";
import axios from "axios";

const Header = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const storage = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  var store_id = false;
  if (localStorage.getItem("user")) {
    store_id = JSON.parse(window.localStorage.getItem("user")).store_id;
  }

  useEffect(() => {
    let data = JSON.stringify({
      token: token,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/users/check-token",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.data.result != "success") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
          return;
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log(error);
      });
  }, [token]);

  return (
    <section id="header">
      <div className="navbar_header">
        <div className="headWithBox">
          <div className="headMenu">
            <div className="storename">
              <Link to="/">
                <img src={tour_logo} alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="ulHead_box">
            <form className="searchBarForm">
              <input
                id="search"
                type="text"
                className="input_search_heaederr"
                placeholder="Search..."
              />
              <button type="submit">
                <FaMagnifyingGlass className="iconSearch" />
              </button>
            </form>
          </div>

          <div className="icon_account_login">
            {user && (
              <div className="icon_account_login">
                <>
                  <Link to="/cart">
                    <IoMdCart id="icon_dashboard" />
                  </Link>
                  <Link to="/account-user">
                    <FaUser id="icon_dashboard_user" />
                  </Link>
                  <>
                    {storage.is_admin === true && (
                      <Link to="/tour-admin">
                        <AiFillDashboard id="icon_dashboard" />
                      </Link>
                    )}
                  </>
                </>
              </div>
            )}
            {!user && (
              <>
                <Link to={token ? "/cart" : "/login"}>
                  <IoMdCart id="icon_dashboard" />
                </Link>
                <Link to={token ? "/account-user" : "/login"}>
                  <FaUser id="icon_dashboard_user" />
                </Link>
                <Link to="/login" className="head_colorr">
                  <p>Login</p>
                  <BiLogIn className="login" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
