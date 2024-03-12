import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import Payment from "./Payment";

import "./cart.css";

const Cart = () => {
  const [products, setProducts] = useState([
    { productID: 1, productName: "깻잎", price: 10, images: [깻잎] },
    { productID: 2, productName: "더덕무침", price: 20, images: [더덕무침] },
    { productID: 3, productName: "멸치볶음", price: 30, images: [멸치볶음] },
  ]);

  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [productCounts, setProductCounts] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.productID]: 1 }), {})
  );

  useEffect(() => {
    const totalPrice = products.reduce(
      (accumulator, product) =>
        accumulator + product.price * (productCounts[product.productID] || 0),
      0
    );
    const shipping = 0;
    const grandTotal = totalPrice + shipping;

    setPrice(totalPrice);
    setShipping(shipping);
    setGrandTotal(grandTotal);
  }, [products, productCounts]);

  const incrementCount = (productID) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productID]: (prevCounts[productID] || 0) + 1,
    }));
  };

  const decrementCount = (productID) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productID]: Math.max(0, (prevCounts[productID] || 0) - 1),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts([]);
    setPrice("");
    setShipping("");
    setGrandTotal("");
    const selectedProducts = products.map((product) => ({
      productID: product.productID,
      productName: product.productName,
      color: product.colorName,
      price: product.price,
      size: product.size,
      productCounts: productCounts[product.productID] || 0,
      totalPrice: grandTotal,
    }));

    // Submit the selected products with userID
    // Send to checkout
    navigate("/cart/payment/", {
      state: {
        productsCart: selectedProducts,
      },
    });
  };

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [cart_items, set_cart_items] = useState([]);
  const [count, set_count] = useState(1);
  var totalPrice = 0; // for eatch product
  var totalQuantity = 0; // for eatch product
  var allPrice = 0; // Price for all product in the cart
  var allQuantity = 0; // Quantity for all product in the cart

  const [show_payment, set_show_payment] = useState(false);
  var user_id = null;
  if (localStorage.getItem("user")) {
    user_id = JSON.parse(window.localStorage.getItem("user")).user_id;
  }

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
    let data = JSON.stringify({
      user: user_id,
      items: [],
    });

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/api/user/${user_id}/cart-food`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        set_cart_items(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_id]);

  const DeleteProduct = (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/api/cart-food/item/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        alert("Removed product successful");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePay = () => {
    set_show_payment(true);
  };

  return (
    <>
      {show_payment ? (
        <Payment orders={cart_items} order_from="cart" onPay={handlePay} />
      ) : (
        <>
          <Header />
          <form onSubmit={handleSubmit}>
            <div className="box_container_cart">
              <div className="display_products">
                {cart_items.length === 0 ? (
                  <p className="no-reviews-message">No Product</p>
                ) : (
                  cart_items.map((cart) => (
                    <div>
                      {cart.items.map((item) => (
                        <div className="container_cart_item" key={item.id}>
                          <div className="box_item_image">
                            <img src={item.product.images} alt="img"></img>
                            <div className="box_item_text">
                              <p>Name: {item.product.name}</p>
                              <p>
                                Price:{" "}
                                {parseFloat(item.price).toLocaleString(
                                  "en-US",
                                  {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                    useGrouping: true,
                                  }
                                )}{" "}
                                Kip
                              </p>
                              <p hidden>
                                {(totalPrice += item.price * item.quantity)}
                                <p hidden>{(allQuantity += item.quantity)}</p>
                              </p>
                            </div>
                          </div>
                          <div className="box_icon_order">
                            <div className="btnicon_delete_order">
                              <AiOutlineDelete
                                id="btnicon_delete"
                                onClick={() => {
                                  DeleteProduct(item.id);
                                }}
                              />
                            </div>

                            <div className="box_item_icon">
                              <div
                                className="icon_minus_plus"
                                onClick={() => decrementCount(item.id)}
                              >
                                -
                              </div>
                              <span>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={() => {}}
                                />
                              </span>
                              <div
                                className="icon_minus_plus"
                                onClick={() => incrementCount(item.id)}
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <div className="box_item_total">
                            <h1>Cart Total</h1>
                            <div className="box_item_total_text">
                              <p>Subtotal: {allQuantity}</p>
                              {/* <p>
                            <input
                              type="text"
                              value={"$ " + {}}
                              onChange={() => {}}
                            />
                          </p> */}
                            </div>
                            {/* <div className="box_item_total_text">
                          <p>Shipping: </p>
                          <p>
                            <input
                              type="text"
                              value={"$ " + shipping}
                              onChange={() => {}}
                            />
                          </p>
                        </div> */}
                            <hr />
                            <div className="box_item_total_text">
                              <h3>
                                Total:{" "}
                                {parseFloat(
                                  (allPrice = totalPrice)
                                ).toLocaleString("en-US", {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                  useGrouping: true,
                                })}{" "}
                                Kip
                              </h3>
                              {/* <p>
                            <input
                              type="text"
                              value={"$ " + grandTotal}
                              onChange={() => {}}
                            />
                          </p> */}
                            </div>
                            <div className="btn">
                              <Link to="/" className="Continues_btn">
                                Continues Shopping
                              </Link>
                              <button
                                onClick={handlePay}
                                className="checkout_btn"
                              >
                                Checkout
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          </form>
          <Menu />
        </>
      )}
    </>
  );
};

export default Cart;
