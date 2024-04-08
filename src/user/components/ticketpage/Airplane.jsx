import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import airplane from "../../../img/airplane.jpg";
import airplane1 from "../../../img/airplane1.jpg";
import airplane2 from "../../../img/airplane2.jpg";

function Airplane() {
  return (
    <>
        <Header />
        <Menu />
            <div className="containner_airplane">

              <div className="content_itemAirplane">
                <div className="container_head_airplane">
                  <h3 className="txt_head_airplane">
                    <span className="span_Style_airplane"></span>Airport
                    pickup/sending
                  </h3>
                </div>
                <div className="content_image_airplane">
                  <div className="group_item_Box_airplane">
                    <Link to="/details" className="images">
                      <img src={airplane1} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Vientiane Airport Dropping Service</h3>
                      <p>
                        We will conveniently transport you from the hotel to the airport.
                      </p>
                      <div className="price">
                        <p className="price_num">$10</p>
                        <p> ￦15,000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="group_item_Box_airplane">
                    <Link to="/details1" className="images">
                      <img src={airplane} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Airplane</h3>
                      <p>
                        We will take you to Kuang Si Falls safely and comfortably.
                      </p>
                      <div className="price">
                        <p className="price_num">$10</p>
                        <p> ￦15,000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="group_item_Box_airplane">
                    <Link to="/details2" className="images">
                      <img src={airplane2} alt="img" />
                    </Link>
                    <div className="txt_desc_airplane">
                      <h3>Airport Vang Vieng private pick-up service</h3>
                      <p>
                        Private transfer from Vientiane Airport to Vang Vieng hotel!
                      </p>
                      <div className="price">
                        <p className="price_num">$10</p>
                        <p> ￦15,000 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <Footer />
    </>
  );
}

export default Airplane;
