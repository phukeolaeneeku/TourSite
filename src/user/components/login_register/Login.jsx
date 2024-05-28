import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

import "./css/login.css";

const LoginUser = () => {
  const login_en = "Login";
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, set_errorText] = useState("");

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const Login = (e) => {
    e.preventDefault(); // Prevent the default form submission behavsior
    let data = JSON.stringify({
      email: email,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/users/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    console.log("Data..........", data);

    axios
      .request(config)
      .then((response) => {
        const result = response.data;
        const user = {
          user_id: result.user_id,
          is_admin: result.is_admin,
          is_owner: result.is_owner,
          user_name: result.user_name,
          email: result.email,
          image: result.image,
        };

        const token = result.token.access;
        if (token) {
          window.localStorage.setItem("token", token);
        }
        window.localStorage.setItem("user", JSON.stringify(user));
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          text: "The username or password do not match.",
          icon: "error",
        });
      });
  };
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
                className="input_forms"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmail}
                required
              />
              <label>Password</label>
              <input
                className="input_forms"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handlePassword}
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
              <button type="submit" className="login_button" onClick={Login}>
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
