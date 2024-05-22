import React, { useState } from "react";
import "./css/header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import tour_logo from "../../../img/tour_logo.gif";
import hotel1 from "../../../img/hotel1.jpg";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="navbar_header">
          <div className="headWithBox">
            <div className="headMenu">
              <div className="storename">
                <Link to="/">
                  <img src={tour_logo} alt="Logo" />
                  {/* <img src={hotel1} alt="Logo" /> */}
                </Link>
              </div>
            </div>

            <div className="ulHead_box">
              <form className="searchBarForm">
                {/* Here is search bar */}
                <input
                  id="search"
                  type="text"
                  className="input_search_heaederr"
                  placeholder="Search..."
                ></input>
                <button type="submit">
                  <FaMagnifyingGlass className="iconSearch" />
                </button>
              </form>
            </div>
            <div className="icon_account_login">
              <Link to="/cart">
              <IoMdCart id="icon_dashboard"/>
              </Link>
              <Link to="/account-user">
                <FaUser id="icon_dashboard_user" />
              </Link>
              <Link to="/tour-admin">
                <AiFillDashboard id="icon_dashboard" />
              </Link>
              <Link to="/login" className="head_colorr">
                <p>Login</p>
                <BiLogIn className="login" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
