import Menu from "../menu/Menu";
import Header from "../header/Header";
import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../img/Logo.png";
import storename from "../../../img/storename.png";
import axios from "axios";

import "./bill.css";
const Bill = () => {
  const token = localStorage.getItem("token");
  const order_id = useParams().id;
  const [order_list, setOrderList] = useState("");
  var totalPrice = 0;

  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.stringify({
      token: token,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/user/check-token",
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
          localStorage.clear();
          navigate("/login");
          return;
        }
      })
      .catch((error) => {
        localStorage.clear();
        console.log(error);
        navigate("/login");
        return;
      });
  }, [token]);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/api/order-food/${order_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [order_id]);

  console.log(order_list);

  return (
    <>
      <Header></Header>
      <section id="bill">
        <Link to="/order" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>

        <div className="bill-detial newspanBox">
          <div className="logo_image_bill">
            <div className="name_store">
              <div>
                <img src={storename} alt="Logo" />
              </div>
            </div>
            <div className="logo_store">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="guopoidHead">
            <div className="idf">
              <p>OrderID: {order_list.id}</p>
            </div>
          </div>
          <hr />
          <div className="billGopBox">
            <table>
              <thead>
                <tr>
                  {/* <div className="popular">
                    <input type="checkbox" id="popular" />
                  </div> */}
                  <th>Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <hr className="hr" />
              {order_list.items &&
                order_list.items.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      {/* <div className="popular">
                        <input type="checkbox" id="popular" />
                      </div> */}
                      <td>{item.product.name}</td>
                      <td>
                        {parseFloat(item.price).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                          useGrouping: true,
                        })}
                      </td>
                      <td>{item.quantity}</td>
                      <p hidden>{(totalPrice += item.price * item.quantity)}</p>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
          <hr />
          <div className="titlePrice">
            <p>Total:</p>
            <p>
              {" "}
              {parseFloat(totalPrice).toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                useGrouping: true,
              })}{" "}
              Kip
            </p>
          </div>
          {/* <div className="box_btn_product">
            <div className="btn_delete_save">
              <button className="btn_delete_order">Delete selected</button>
              <button className="btn_save">Save selected</button>
            </div>
            <div className="btn_select_all">
              <button className="btn_order_select">Order selected</button>
              <button className="btn_order_all">Order all</button>
            </div>
          </div> */}
          <div className="place-on">
            <p>Place on: BCEL</p>
            <p>Payment method: Transfer</p>
            <p>Contact number: +85620{order_list.tel}</p>
            <p>Status: {order_list.status}</p>
            <p>
              Delivery: {order_list.shipping_company}, Province:{" "}
              {order_list.province}, Destrict: {order_list.district}, Branch:{" "}
              {order_list.branch}
            </p>
          </div>
        </div>
      </section>
      <Menu />
    </>
  );
};

export default Bill;
