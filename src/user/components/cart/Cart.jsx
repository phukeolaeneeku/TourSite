import React, { useState } from "react";
import "./css/cart.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import Footer from "../menu/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <>
    <div className="Box_choose_date">
      <button className="custom-input" onClick={onClick} ref={ref}>
        {value || "Select Date"}
      </button>
      <FaRegCalendarAlt id="icon_FaCalendarAlt" />
    </div>
  </>
));

const Cart = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <Header />
      <Menu />
      <div className="box_container_cart">
        <div className="display_products">
          <div className="container_cart_item">
            <h3>Item: Silver Naga Hotel</h3>
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
          <div className="container_cart_item">
            <h3>Item: Vang Vieng</h3>
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
        </div>

        <div className="box_item_total">
          <div className="box_item_total_text">
            Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, veniam.
          </div>
          <hr />

          <div className="btn">
            {/* <Link to="/" className="Continues_btn">
                      계속 쇼핑하다
                    </Link> */}
            <button className="checkout_btn">Send Email</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
