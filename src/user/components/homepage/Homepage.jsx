import "./css/homepage.css";
import Header from "../header/Header";
import Menu from "../header/Menu";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import motorcycle from "../../../img/motorcycle.jpg";
import luangphabang from "../../../img/luangphabang.jpg";
import vangvieng from "../../../img/vangvieng.gif";
import vangvieng2 from "../../../img/vangvieng2.jpg";
import vangvieng3 from "../../../img/vangvieng3.jpg";
import vangvieng4 from "../../../img/vangvieng4.jpg";
import vangvieng6 from "../../../img/vangvieng6.jpg";
import hotel4 from "../../../img/hotel4.jpg";
import hotel2 from "../../../img/hotel2.jpg";
import hotel3 from "../../../img/hotel3.jpg";
import sim from "../../../img/sim.jpg";
import patusai2 from "../../../img/patusai.jpg";
import vangvieng5 from "../../../img/vangvieng5.jpg";
import recommended from "../../../img/recommended.jpg";
import recommended2 from "../../../img/recommended2.jpg";
import recommended3 from "../../../img/recommended3.jpg";
import resort from "../../../img/resort.jpg";
import resort2 from "../../../img/resort2.jpg";
import resort3 from "../../../img/resort3.jpg";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdCart } from "react-icons/io";
import Expandable from "../../../admin/components/managertour/Expandable";
import Swal from "sweetalert2";
import iconImage from "../../../img/iconImage.png";

const Homepage = () => {
  //Golf page
  const [tour_golf, setTour_golf] = useState([]);
  console.log("tour_golf........", tour_golf);
  //Tour page
  const [tour, setTour] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });
  // console.log("Tour........", tour);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/tour/list/",

      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setTour(response.data);
        setTour_golf(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Add item to cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (tour, tour_golf) => {
    if (cart.some((item) => item.id === tour, tour_golf.id)) {
      Swal.fire({
        text: "This item is already cart!",
        icon: "error",
      });
    } else {
      setCart([...cart, tour]);
      setTour_golf([...cart, tour_golf]);

      Swal.fire({
        text: "Add item to cart success!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <Header />
      <Menu id="menu_barv" />
      {/* <section id="container_product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="span_Styles"></span>Laos Play Category Best
          </h1>
        </div>
        <div className="contentImageProducts1">
          <div className="group_itemBox">
            <Link to="/details" className="img">
              <img src={patusai} alt="img" />
            </Link>
            <div className="txtOFproduct">
              <h4>Vientiane Airport Pickup Service</h4>
              <p>
                We will conveniently transport you from the airport to your hotel.
              </p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
          <div className="group_itemBox">
            <Link to="/details" className="img">
              <img src={patusai} alt="img" />
            </Link>
            <div className="txtOFproduct">
              <h4>Vientiane Airport Pickup Service</h4>
              <p>
                We will conveniently transport you from the airport to your hotel.
              </p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
         
          <div className="group_itemBox">
            <div className="img">
              <img src={thadluang} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4> Vientiane City Tour </h4>
              <p>You can travel around Vientiane comfortably.</p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="img">
              <img src={motorcycle} alt="img" />
            </div>
            <div className="txtOFproduct">
              <h4>Buggy Tour Vang Vieng</h4>
              <p>Take a buggy ride around Vang Vieng</p>
              <div className="price">
                <p className="price_num">$10</p>
                <p> ￦15,000 </p>
              </div>
              <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Super Special Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={luangphabang} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Kuang Si Falls Private Pickup Service_Luang Prabang</h4>
                <p>
                  We will take you to Kuang Si Falls safely and comfortably.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4> Hot air balloon tour</h4>
                <p>
                  We will make good memories in the beautiful Vang Vieng sky.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>One-day full package (kayak & zipline)_Vang Vieng</h4>
                <p>
                  One-day pack that you can enjoy all day in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Activity Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Kayak Caving & Swimming_Vang Vieng</h4>
                <p>
                  A unique experience that includes kayaking and cave tubing.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng4} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4> Semi pack (kayak & blue lagoon)_Vang Vieng</h4>
                <p>
                  Enjoy kayaking and swim in the Blue Lagoon!
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng6} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4> Vang Vieng Paramotor Tour</h4>
                <p>
                  Fly over Vang Vieng and see its beauty!
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Hotel Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={hotel4} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Amari Hotel Vang Vieng</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={hotel2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Indigo House Hotel</h4>
                <p>
                Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={hotel3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Silver Naga Hotel</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Recommended products for sale/rental
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={sim} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Amari Hotel Vang Vieng</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={vangvieng5} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Indigo House Hotel</h4>
                <p>
                Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={patusai2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Silver Naga Hotel</h4>
                <p>
                  Good value hotel in Vang Vieng
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>Laos Coupon Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={recommended} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>wellness spa</h4>
                <p>
                  Wellness spa to truly relax your body
                </p>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={recommended2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>belgian beer house</h4>
                <p>
                  Enjoy a cold Belgian beer!
                </p>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={recommended3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Vang Vieng First Massage</h4>
                <p>
                  Best massage in Vang Vieng
                </p>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="span_Styles"></span>New Recommended
            </h3>
          </div>
          <div className="contentImageProducts2">
            <div className="group_itemBox">
              <div className="img">
                <img src={resort} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>My Dream Boutique Resort</h4>
                <p>
                  My Dream Boutique Resort
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={resort2} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>Vientiane Vang Vieng private car service</h4>
                <p>
                We will take you comfortably between Vientiane and Vang Vieng.
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
            <div className="group_itemBox">
              <div className="img">
                <img src={resort3} alt="img" />
              </div>
              <div className="txtOFproduct">
                <h4>The Beer House</h4>
                <p>
                  Discover a variety of beers from around the world!
                </p>
                <div className="price">
                  <p className="price_num">$10</p>
                  <p> ￦15,000 </p>
                </div>
                <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="containnerOneday_body">
        <div className="content_item_Oneday">
          <div className="container_txt_head">
            <h3 className="txt_head_Oneday">
              <span className="span_Styles"></span>Tour
            </h3>
          </div>

          <div className="box_container">
            {tour
              .filter((i) => {
                console.log("Tour item:", i); // Log each tour item
                return i.category == "one_day";
              })
              .map((i, index) => (
                <div className="box_container_body" key={index}>
                  <Link to={`/details/${i.id}`} className="container_image">
                    <img src={i.image || iconImage} alt="image" />{" "}
                    {/* Improved alt text */}
                    {/* <img src={i.image.image || recommended3} alt="image" />  */}
                  </Link>
                  <div className="container_des">
                    <h2>{i.name}</h2>
                    <Expandable>{i.description}</Expandable>

                    <div className="txt_oneday">
                      <p className="price_number_one">${i.price}</p>
                    </div>

                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {i.address}
                    </p>
                    <p className="IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(i, index)}
                      />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="containnergolf_body">
        <div className="content_itemGolf">
          <div className="container_head">
            <h3 className="txt_head">
              <span className="span_Style"></span>Golf
            </h3>
          </div>
          <div className="content_image_Products">
            {tour_golf
              .filter((golf) => {
                console.log("Tour item:", golf); // Log each tour item
                return golf.category == "golf";
              })
              .map((golf, index) => (
                <div className="group_item_Box" key={index}>
                  <Link to="/details" className="golf_image">
                    <img src={golf.image || iconImage} alt="img" />
                  </Link>
                  <div className="txt_desc">
                    <h3>{golf.name}</h3>
                    <Expandable>{golf.description}</Expandable>
                    <div className="price">
                      <p className="price_num">${golf.price}</p>
                    </div>
                    <p className="SiGooglemaps">
                      <SiGooglemaps id="icon_map" /> {golf.address}
                    </p>

                    <p className="box_IoMdCart">
                      <IoMdCart
                        id="icon_IoMdCart"
                        onClick={() => handleAddToCart(golf, index)}
                      />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
