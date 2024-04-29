
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import Menu from "../header/Menu"
import "./css/oneday.css";
import { SiGooglemaps } from "react-icons/si";
import night_vientiane2 from "../../../img/night_vientiane2.jpg";
import night_vangvieng from "../../../img/night_vangvieng.jpg";
import night_luangphabang from "../../../img/night_luangphabang.jpg";
import Expandable from "../../../admin/components/managertour/Expandable"


function Oneday() {
  return (
    <>
        <Header />
        <Menu />
        <div className="containnerOneday_body">
            <div className="content_item_Oneday">
                <div className="container_txt_head">
                    <h3 className="txt_head_Oneday">
                        <span className="span_Styles"></span>Night tour
                    </h3>
                </div>
                <div className="box_container">
                    <div className="box_container_body">
                        <Link to="/details" className="container_image">
                            <img src={night_vientiane2} alt="image" />
                        </Link>
                        <div className="container_des">
                            <h2>Vientiane</h2>
                            <Expandable>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            </Expandable>
                            <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
                        </div>
                    </div>
                    <div className="box_container_body">
                        <div className="container_image">
                            <img src={night_vangvieng} alt="image" />
                        </div>
                        <div className="container_des">
                            <h2>Vang Vieng</h2>
                            <Expandable>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            </Expandable>
                            <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
                        </div>
                    </div>
                    <div className="box_container_body">
                        <div className="container_image">
                            <img src={night_luangphabang} alt="image" />
                        </div>
                        <div className="container_des">
                            <h2>Luang prabang</h2>
                            <Expandable>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            </Expandable>
                            <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Luang prabang</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
    </>
  );
}

export default Oneday;
