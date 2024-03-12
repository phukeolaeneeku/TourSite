import { FiPlus } from "react-icons/fi";
import "./payment.css";
import qrcode from "../../../img/QRCODE.png";
import wechat from "../../../img/WeChat.png";
import Menu from "../menu/Menu";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";

const Payment = ({ orders, order_from, onPay }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [tel, set_tel] = useState("");
  const [account_name, set_account_name] = useState("");
  const [province, set_province] = useState("");
  const [district, set_district] = useState("");
  const [shipping_company, set_shipping_company] = useState("");
  const [branch, set_branch] = useState("");
  var user_id = null;
  if (localStorage.getItem("user")) {
    user_id = JSON.parse(window.localStorage.getItem("user")).user_id;
  }
  var totalPrice = 0;

  console.log(order_from);

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

  const handleTel = (e) => {
    const value = e.target.value;
    set_tel(value);
  };
  const handleProvince = (e) => {
    const value = e.target.value;
    set_province(value);
  };
  const handleDistrict = (e) => {
    const value = e.target.value;
    set_district(value);
  };
  const handleShippingCompany = (e) => {
    const value = e.target.value;
    set_shipping_company(value);
  };
  const handleBranch = (e) => {
    const value = e.target.value;
    set_branch(value);
  };
  const handleAccountName = (e) => {
    const value = e.target.value;
    set_account_name(value);
  };

  const handlePay = () => {
    if (!tel) {
      alert("Please add the contact number!");
      return; // Abort the function if tel is null
    }
    if (!province) {
      alert("Please add the province!");
      return; // Abort the function if province is null
    }
    if (!district) {
      alert("Please add the district!");
      return; // Abort the function if district is null
    }
    if (!shipping_company) {
      alert("Please add the money shipping company name!");
      return; // Abort the function if shipping_company is null
    }
    if (!branch) {
      alert("Please add the branch!");
      return; // Abort the function if branch is null
    }
    if (!account_name) {
      alert("Please add the account name!");
      return; // Abort the function if statement_image is null
    }

    // Extract product information from each order
    const products = orders.flatMap((order) =>
      order.items.map((item) => ({
        product: item.product.id,
        quantity: item.quantity,
        price: item.price,
      }))
    );

    let data = JSON.stringify({
      user: user_id,
      tel: tel,
      status: "Pending",
      total_prices: totalPrice,
      province: province,
      district: district,
      shipping_company: shipping_company,
      branch: branch,
      account_name: account_name,
      items: products.map((product) => ({
        product: product.product,
        quantity: product.quantity,
        price: product.price,
      })),
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/api/order-food/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("The order has been complated.");
        if (order_from === "buy_now") {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    if (orders[0].id) {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: import.meta.env.VITE_API + `/api/cart-food/delete/${orders[0].id}`,
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="guopBoxPayment_container">
        <h2 className="h2_boxPayment">Payment</h2>
        <div className="adress_payment_content">
          <h3>Details:</h3>

          {orders.map((product) => (
            <div>
              {product.items.map((item) => (
                <div className="box_item_gourp" key={item.id}>
                  <div className="box_item_image">
                    <img
                      src={item.product.images}
                      alt=""
                      style={{ width: "200px" }}
                    />
                    <div className="box_item_text">
                      <p>Name: {item.product.name}</p>
                      <p>
                        Price:{" "}
                        {parseFloat(item.price).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                          useGrouping: true,
                        })}
                      </p>
                      <p>
                        Quantity:{" "}
                        {parseFloat(item.quantity).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                          useGrouping: true,
                        })}
                      </p>
                      <p hidden>{(totalPrice += item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <h3>Address:</h3>
          <div className="box_address">
            <form className="box_address_input">
              <div className="box">
                <label htmlFor="prov">Contact number:</label>
                <input 
                  type="text" 
                  id="prov" 
                  value={tel} 
                  onChange={handleTel} 
                />
              </div>
              <div className="box">
                <label htmlFor="prov">Province:</label>
                <input
                  type="text"
                  id="prov"
                  value={province}
                  onChange={handleProvince}
                />
              </div>
              <div className="box">
                <label htmlFor="city">District:</label>
                <input
                  type="text"
                  id="city"
                  value={district}
                  onChange={handleDistrict}
                />
              </div>
              <div className="box">
                <label htmlFor="companny">Shipping Companny name:</label>
                <input
                  type="text"
                  id="companny"
                  value={shipping_company}
                  onChange={handleShippingCompany}
                />
              </div>
              <div className="box">
                <label htmlFor="branch">Branch:</label>
                <input
                  type="text"
                  id="branch"
                  value={branch}
                  onChange={handleBranch}
                />
              </div>
              <div className="box">
                <label htmlFor="branch">Account name:</label>
                <input
                  type="text"
                  id="prov"
                  value={account_name}
                  onChange={handleAccountName}
                />
              </div>
            </form>
          </div>
          <div className="box_transfer">
            <h3 className="box_transfer_p_line">
              Total Price:{" "}
              {parseFloat(totalPrice).toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                useGrouping: true,
              })}{" "}
              Kip
            </h3>
          </div>
          <div className="box_transfer">
            <p className="box_transfer_p_line">
              Please transfer money to this account
            </p>
            <div className="boxaccount_number">
              <div className="boxaccount_number_p">
                {/* <h3>BCEL</h3> */}
                <div className="qr">
                  <img src={qrcode} alt="" />
                </div>
              </div>
            </div>
          </div>
          <Link onClick={handlePay} className="save">
            Confirm
          </Link>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Payment;
