import React from "react";
import "./css/register.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";

const Signup = () => {
  return (
    <>
      <Header />
      <Menu />
      <section>
        <div className="box_forgot">
          <h2>User registration</h2>
          <div className="title">
            You are in the process of signing up as a user!
          </div>
          <form className="container_form_user">
            <div className="box_title">Enter basic information</div>
            <div className="container_form_user2">
              <input type="email" name="email" placeholder="Email" required />
              <div className="verification">Verify</div>
            </div>
            <input
              type="text"
              name="code"
              placeholder="Certication Number"
              required
            />
            <input
              type="text"
              name="nickname"
              placeholder="Nickname (maximun 10 characters)"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="passwords"
              required
            />
            <input
              type="password"
              name="password2"
              placeholder="Confirm password"
              required
            />
            <button type="button">Register</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Signup;
