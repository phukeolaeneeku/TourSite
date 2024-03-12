import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import "./productBuy.css";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import Payment from "../cart/Payment";

function ProductDetails() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const product_id = useParams().id;
  const [showPayment, setShowPayment] = useState(false);
  const [product, setProduct] = useState(null);
  const [price, set_price] = useState(null);
  const [count, set_count] = useState(1);

  var user_id = null;
  if (localStorage.getItem("user")) {
    user_id = JSON.parse(window.localStorage.getItem("user")).user_id;
  }

  const orderitems = [
    {
      user: user_id,
      items: [
        {
          product: product,
          quantity: count,
          price: price,
        },
      ],
    },
  ];

  console.log("User id:", user_id);
  console.log("product", product_id);
  console.log("price", price);
  console.log("count", count);

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
      url: import.meta.env.VITE_API + `/api/product/${product_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setProduct(response.data);
        set_price(response.data.price);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [product_id]);

  const decrease = () => {
    if (count > 1) {
      set_count(count - 1);
    }
  };

  const increase = () => {
    set_count(count + 1);
  };

  const AddToCard = async () => {
    let data = JSON.stringify({
      user: user_id,
      items: [
        {
          product: product_id,
          quantity: count,
          price: price,
        },
      ],
    });

    // Check if the user already has a cart
    let cartResponse = null;

    cartResponse = await axios.get(
      `${import.meta.env.VITE_API}/api/user/${user_id}/cart-food`
    );

    // alert(cartResponse);
    // alert(cartResponse.data.length);

    let config;
    if (cartResponse.data.length >= 1) {
      if (cartResponse.data[0].id) {
        // If the user already has a cart, update the existing cart
        config = {
          method: "put",
          url: `${import.meta.env.VITE_API}/api/cart-food/update/${
            cartResponse.data[0].id
          }`,
        };
      }
    } else {
      // If the user doesn't have a cart, create a new cart
      config = {
        method: "post",
        url: `${import.meta.env.VITE_API}/api/cart-food/create`,
      };
    }

    // Send request to add item to the cart
    await axios.request({
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });

    alert("This product has been added to the cart.");

    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: import.meta.env.VITE_API + "/api/cart-food/create",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     alert("This product has been added to the cart.");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // set_count(1);
  };

  const handlePay = () => {
    setShowPayment(true);
  };

  return (
    <>
      {showPayment ? (
        <Payment orders={orderitems} order_from="buy_now" onPay={handlePay} />
      ) : (
        <>
          <Header />

          <div className="contentBody">
            <Link to="/" className="box_container_back_icons_back">
              <IoIosArrowBack id="icons_back" />
              <p>Back</p>
            </Link>
            {product ? (
              <div key={product.id}>
                <div className="boxProduct_deteils">
                  <div className="slider">
                    <React.Fragment>
                      <section className="product_details">
                        <div className="product-page-img">
                          <div className="myslides">
                            <img src={product.images} alt="" />
                          </div>
                        </div>
                      </section>
                    </React.Fragment>
                  </div>

                  <div className="txtContentproduct">
                    <h1 className="txt_nameP">Name: {product.name}</h1>
                    <p className="money_txt">
                      Price: {product.format_price} Kip
                    </p>

                    <p className="txt_description">
                      Review: {product.review_total}
                    </p>

                    <div className="hr">
                      <hr />
                    </div>

                    {/* Amount product */}
                    <div className="container_item_icon">
                      <div className="container_minus_plus" onClick={decrease}>
                        -
                      </div>
                      <span>{count}</span>
                      <div className="container_minus_plus" onClick={increase}>
                        +
                      </div>
                    </div>
                    <div className="Count_product">
                      <button className="echbtn btnBut" onClick={handlePay}>
                        Buy Now
                      </button>
                      <button className="echbtn btnAdd" onClick={AddToCard}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="description_container">
              <img src={product.images} alt="" />
            </div> */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <Menu />
        </>
      )}
    </>
  );
}

export default ProductDetails;
