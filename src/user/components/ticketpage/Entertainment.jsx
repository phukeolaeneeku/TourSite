import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu";
import "./css/airplane.css";
import Entertainment from "../../../img/Entertainment.jpg";
import Entertainment1 from "../../../img/Entertainment1.jpg";
import Entertainment2 from "../../../img/Entertainment2.jpg";
import Expandable from "../../../admin/components/managertour/Expandable";

function Massage() {
  return (
    <>
      <Header />
      <Menu />
      <div className="containner_airplane">
        <div className="content_itemAirplane">
          <div className="container_head_airplane">
            <h3 className="txt_head_airplane">
              <span className="span_Style_airplane"></span>Entertainment
            </h3>
          </div>
          <div className="content_image_airplane">
            <div className="group_item_Box_airplane">
              <Link to="/details" className="image">
                <img src={Entertainment} alt="img" />
              </Link>
              <div className="txt_desc_airplane">
                <h3>Entertainment in Vientaine</h3>
                <Expandable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, eaque!
                </Expandable>
              </div>
            </div>
            <div className="group_item_Box_airplane">
              <Link to="/details" className="image">
                <img src={Entertainment1} alt="img" />
              </Link>
              <div className="txt_desc_airplane">
                <h3>Entertainment in Vientaine</h3>
                <Expandable>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, eaque!
                </Expandable>
              </div>
            </div>
            <div className="group_item_Box_airplane">
              <Link to="/details" className="image">
                <img src={Entertainment2} alt="img" />
              </Link>
              <div className="txt_desc_airplane">
                <h3>Entertainment in Vientaine</h3>
                <Expandable>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur eveniet sint quidem aliquam ratione velit non
                  reprehenderit voluptatem accusamus dignissimos!
                </Expandable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Massage;
