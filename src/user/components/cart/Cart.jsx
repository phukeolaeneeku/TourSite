import React, { useState, useEffect, useRef } from "react";
import "./css/cart.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import emailjs from "@emailjs/browser";

const CustomInput = React.forwardRef(({ value, onClick }) => (
  <div className="Box_choose_date">
    <button className="custom-input" onClick={onClick}>
      {value || "Select date"}
    </button>
    <FaRegCalendarAlt id="icon_FaCalendarAlt" />
  </div>
));

const Cart = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recipient, setRecipient] = useState("sam@gmail.com");
  const [subject, setSubject] = useState("test");
  const [message, setMessage] = useState([]);

  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  // Initialize date state for each cart item
  const initialDates = cart.map(() => ({ startDate: null, endDate: null }));
  const [dates, setDates] = useState(initialDates);

  // Function to handle date changes
  const handleDateChange = (index, type, date) => {
    const newDates = [...dates];
    newDates[index][type] = date;
    setDates(newDates);
  };

  useEffect(() => {
    if (startDate && endDate) {
      const message = ` Start Date: ${startDate.toLocaleDateString()} - End Date: ${endDate.toLocaleDateString()}`;
      setMessage(message);
    }
  }, [startDate, endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailLink, "_blank");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const unfavorite = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //////////// Send to email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pu6qmbs", "template_em49dhd", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <Menu />
      <div className="box_container_cart">
        {/* <div className="display_products">
          {cart.length === 0 ? (
            <p className="no-reviews-message">Empty Cart</p>
          ) : (
            cart.map((cart) => (
              <div className="container_cart_item" key={cart.id}>
                <div className="txt_box_delete">
                  <h3>Item: {cart.name}</h3>
                  <button
                    className="btn_delete_item"
                    onClick={() => unfavorite(cart.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
                <div className="box_item_text">
                  <label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      customInput={<CustomInput />}
                    />
                  </label>
                  <p>to</p>
                  <label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      customInput={<CustomInput />}
                    />
                  </label>
                </div>
              </div>
            ))
          )}
        </div> */}
        <div className="display_products">
          {cart.length === 0 ? (
            <p className="no-reviews-message">Empty Cart</p>
          ) : (
            cart.map((cartItem, index) => (
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
                      onChange={(date) =>
                        handleDateChange(index, "startDate", date)
                      }
                      customInput={<CustomInput />}
                    />
                  </label>
                  <p>to</p>
                  <label>
                    <DatePicker
                      selected={dates[index].endDate}
                      onChange={(date) =>
                        handleDateChange(index, "endDate", date)
                      }
                      customInput={<CustomInput />}
                    />
                  </label>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="box_item_total">
          <div className="box_item_total_text">
            Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, veniam.
          </div>

          <hr />
          <div className="btn">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
