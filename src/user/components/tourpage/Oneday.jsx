
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../menu/Footer";
import Header from "../header/Header";
import "./css/oneday.css";
import { IoIosArrowBack } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import patusai from "../../../img/patusai.jpg";
import thadluang from "../../../img/thadluang.jpg";
import motorcycle from "../../../img/motorcycle.jpg";


function Oneday() {
  return (
    <>
        <Header />
        <div className="containnerOneday_body">
            <Link to="/" className="back_icons_back_one">
                <IoIosArrowBack/>
                <p>Back</p>
            </Link>
            <div className="box_container">
                <Link to="/details" className="box_container_body">
                    <div className="container_image">
                        <img src={thadluang} alt="image" />
                    </div>
                    <div className="container_des">
                        <h2>Vientiane</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                        </p>
                        <p> $10 ￦15,000 </p>
                        <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
                        <p>Review: 220</p>
                    </div>
                </Link>
                <div className="box_container_body">
                    <div className="container_image">
                        <img src={motorcycle} alt="image" />
                    </div>
                    <div className="container_des">
                        <h2>Vang Vieng</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                        </p>
                        <p> $10 ￦15,000 </p>
                        <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vang Vieng</p>
                        <p>Review: 150</p>
                    </div>
                </div>
                <div className="box_container_body">
                    <div className="container_image">
                        <img src={patusai} alt="image" />
                    </div>
                    <div className="container_des">
                        <h2>Vientiane</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi!
                        </p>
                        <p> $10 ￦15,000 </p>
                        <p className="SiGooglemaps"><SiGooglemaps id="icon_map"/> Vientiane</p>
                        <p>Review: 200</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Oneday;
