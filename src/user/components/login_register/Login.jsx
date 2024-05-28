import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";

import "./css/login.css";

const LoginUser = () => {
  const login_en = "Login";
  return (
    <>
      <Header />
      <Menu />
      <section>
        <form className="box_container_login">
          <div className="Box_login">
            <Link to="/" className="box_iconBack_login">
              {/* <MdArrowBack id="iconBack" /> */}
            </Link>
            <h2 className="box_container_login_text">{login_en}</h2>
            <p className="box_pleaselogin">Please Log in to use the service!</p>
            <div className="input">
              <label>Email</label>
              <input
                className="input_form"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <label>Password</label>
              <input
                className="input_form"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="forgot_password">
              Forgot your password?{" "}
              <Link to={"/forgotpassword"} className="findpassword">
                Find password
              </Link>
            </div>

            <div className="loginbtn_login">
              <button type="submit" className="login_button" >
                Login
              </button>
            </div>
            <div className="googlebtn_btn">
              <p className="box_dont">
                Is this your first time?
                <Link to={"/register"} className="loginmoreLink">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default LoginUser;
