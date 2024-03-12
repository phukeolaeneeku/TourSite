import "./productHome.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import 물김치 from "../../../img/물김치.jpg";
import 참외장아찌 from "../../../img/참외장아찌.jpg";
import 파김치 from "../../../img/파김치.jpg";
import Header from "../header/Header";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const ProductHome = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [ShowFilter, setShowFilter] = useState(false);
  const [foods_new, set_foods_new] = useState([]);
  const [foods_popular, set_foods_popular] = useState([]);
  const [sliceNum, set_sliceNum] = useState(8);
  const storage = JSON.parse(window.localStorage.getItem("user"));
  const [search, set_search] = useState("");
  const [category, set_category] = useState(1);
  var is_staff = false;
  if (localStorage.getItem("user")) {
    is_staff = JSON.parse(window.localStorage.getItem("user")).is_staff;
  }

  const handleMore = () => {
    set_sliceNum(sliceNum + 8);
  };

  console.log(foods_new);
  console.log(foods_popular);

  const SliceGoodsListNew = useMemo(() => {
    return foods_new.slice(0, sliceNum);
  }, [foods_new]);

  const SliceGoodsListPopular = useMemo(() => {
    return foods_popular.slice(0, sliceNum);
  }, [foods_popular]);

  function OnSearch(e) {
    e.preventDefault();
    let data = JSON.stringify({
      search: search,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/api/search",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        set_foods_new(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ChangeCategory(e, number) {
    e.stopPropagation();
    if (number != category) {
      set_category(number);
      setShowFilter(false);
    }
  }

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/api/foods/?order=popular`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        set_foods_popular(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/api/foods/?order=new`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        set_foods_new(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  function StarAVG(value) {
    let star_avg = (value / 5) * 100;
    if (star_avg === 0) {
      star_avg = 100;
    }
    return star_avg;
  }

  const productDetial = (id) => {
    navigate(`productdetails/${id}`);
  };

  return (
    <div>
      <Header handleSearch={OnSearch} />
      <section id="product1">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>POPULAR MENU
          </h1>
        </div>
        <div className="contentImageProducts1">
          {/* {SliceGoodsList.map(
            (product, index) =>
              product.popular && (
                <div key={index}>
                  <div
                    className="group_itemBox"
                    onClick={() => handleProduct(product.productID)}
                  >
                    <div className="img">
                      <img src={product.images} alt="img" />
                    </div>
                    <div className="box_cart_searchs">
                      <FaCartShopping className="box_icon_search" />
                    </div>
                    <div className="txtOFproduct">
                      <h4>{product.name}</h4>
                      <p>${product.price}</p>
                      <p>Review: {product.review}</p>
                    </div>
                  </div>
                </div>
              )
          )} */}
          {SliceGoodsListPopular.map((product, index) => (
            <div key={index}>
              <div
                className="group_itemBox"
                onClick={() => productDetial(product.id)}
              >
                <div className="img">
                  <img src={product.images} alt="img" />
                </div>
                <div className="box_cart_searchs">
                  <FaCartShopping className="box_icon_search" />
                </div>
                <div className="txtOFproduct">
                  <h4>{product.name}</h4>
                  <p>{product.format_price} Kip</p>
                  <div className="star">
                    <div
                      className="on"
                      style={{ width: `${StarAVG(product.star_avg)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="spennofStyle"></span>ALL MENU
            </h3>
          </div>
          <div className="contentImageProducts2">
            {SliceGoodsListNew.map((product, index) => (
              <div key={index}>
                <div
                  className="group_itemBox"
                  onClick={() => productDetial(product.id)}
                >
                  <div className="img">
                    <img src={product.images} alt="img" />
                  </div>
                  <div className="box_cart_searchs">
                    <FaCartShopping className="box_icon_search" />
                  </div>
                  <div className="txtOFproduct">
                    <h4>{product.name}</h4>
                    <p>{product.format_price} Kip</p>
                    <div className="star">
                      <div
                        className="on"
                        style={{ width: `${StarAVG(product.star_avg)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHome;
