import React, { useState, useEffect, useRef } from "react";
import "./css/cart.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="Box_choose_date">
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value || "Select date"}
    </button>
    <FaRegCalendarAlt id="icon_FaCalendarAlt" />
  </div>
));

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  const initialDates = cart.map(() => ({ startDate: null, endDate: null }));
  const [dates, setDates] = useState(initialDates);
  const [message, setMessage] = useState("");
  const form = useRef();

  useEffect(() => {
    const messages = cart.map((item, index) => {
      const startDate = dates[index].startDate
        ? dates[index].startDate.toLocaleDateString()
        : "N/A";
      const endDate = dates[index].endDate
        ? dates[index].endDate.toLocaleDateString()
        : "N/A";
      return `Item: ${item.name}, Start Date: ${startDate}, End Date: ${endDate}`;
    });
    setMessage(messages.join("\n"));
  }, [cart, dates]);

  const handleDateChange = (index, type, date) => {
    const newDates = [...dates];
    newDates[index][type] = date;
    setDates(newDates);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pu6qmbs", "template_bcy1hld", form.current, "4MJe6ZrfbarB_dfAA")
      .then(
        () => {
          Swal.fire({
            text: "Email sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            text: "Failed to send email. Please try again later.",
            icon: "error",
          });
        }
      );
    e.target.reset();
  };

  const unfavorite = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header />
      <Menu />
      <div className="box_container_cart">
        <form ref={form} onSubmit={sendEmail}>
          <div className="display_products">
            <div className="box_item_total">
              <div className="box_item_total_text">
                Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam.
              </div>
              <hr />
              {cart.length > 0 ? (
                <div>
                  {cart.map((cartItem, index) => (
                    <div className="container_cart_item" key={cartItem.id}>
                      <div className="txt_box_delete">
                        <h3>Item: {cartItem.name}</h3>
                        <button
                          className="btn_delete_item"
                          onClick={() => unfavorite(cartItem.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                      <div className="box_item_text">
                        <label>
                          <DatePicker
                            selected={dates[index].startDate}
                            onChange={(date) => handleDateChange(index, "startDate", date)}
                            customInput={<CustomInput />}
                          />
                        </label>
                        <p>to</p>
                        <label>
                          <DatePicker
                            selected={dates[index].endDate}
                            onChange={(date) => handleDateChange(index, "endDate", date)}
                            customInput={<CustomInput />}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                  <div className="box_container_input">
                    <label>Item:</label>
                    <textarea
                      name="message"
                      className="form_textarea_sendEmail"
                      value={message}
                      readOnly
                      required
                    />
                    <label>Name:</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form_input_sendEmail"
                      placeholder="Please enter your name..."
                      required
                    />
                    <label>Email:</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form_input_sendEmail"
                      placeholder="Please enter your email..."
                      required
                    />
                    <label>Message:</label>
                    <textarea
                      name="message1"
                      className="form_textarea_sendEmail"
                      placeholder="Tour introduction (optional/maximum 300 characters)"
                      maxLength="300"
                    />
                    <input
                      type="submit"
                      value="Send Email"
                      className="btn_sendEmail"
                    />
                  </div>
                </div>
              ) : (
                <p className="no-reviews-message">Empty Cart</p>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
