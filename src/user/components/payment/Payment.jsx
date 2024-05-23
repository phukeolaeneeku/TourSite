import React from "react";
import "./css/payment.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";
import qr from "../../../img/qr.png";
import Checkbox from "@mui/material/Checkbox";

const Payment = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="container_Payment">
        <h3>Payment</h3>
        <div className="box_container_text">
          <label>Account name:</label>
          <input
            className="input_form"
            type="account"
            placeholder="Enter your account name"
            required
          />
          <label>Booking information:</label>
          <textarea
            className="input_textarea"
            name="introduce"
            placeholder="Tour introduction (optional/maximum 300 characters)"
            maxLength="300"
          />
          <div className="text_qrcode">RQ Code</div>
          <div className="box_RQCode">
            <img src={qr} alt="qrcode" />
          </div>
          <div className="box_confirm">
            <div className="box_text_checkbox">
              
              <Checkbox id="Checkbox" />
              <p>if you paid please check box</p>
            </div>
            <button className="btn_confirm_button">Confirm</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
