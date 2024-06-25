import "./menu.css";
import "boxicons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QrdownloadApp from "../../../img/QrdownloadApp.png";
import { HiOutlineHome } from "react-icons/hi";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Footer = () => {
  const [sitemain, setSitemain] = useState();

  console.log("Sitemain....", sitemain);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/tourapi/sitemain/list/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setSitemain(response.data[0]);

        {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      {/*Footer Menu For PC */}

      <footer className="footerBox">
        {sitemain ? (
          <div className="footer_Container">
            <div className="footconentBox">
              <h3 className="txt_footHead">About us</h3>
              <p>
                <Link to="/" className="txt_pFoot">
                  TourSite
                </Link>
              </p>
            </div>

            <div className="footconentBox">
              <h3 className="txt_footHead">Contact us</h3>
              <p>
                <Link to="#" className="txt_pFoot">
                  Phone: {sitemain.tel}
                </Link>
              </p>
              <p>
                <Link to="#" className="txt_pFoot">
                  Email: {sitemain.email}
                </Link>
              </p>
              <p>
                <Link to="#" className="txt_pFoot">
                  Address: {sitemain.address}
                </Link>
              </p>
            </div>
            <div className="footconentBox3">
              <h3 className="txt_footHead txh3">Download App</h3>
              <div className="foot_contentItem">
                <img src={sitemain.qrcode} alt="QrdownloadApp" />
                <div className="guop_btndownl">
                  <Link to="/" className="footLink">
                    Play Store
                  </Link>
                  <Link to="/" className="footLink">
                    App Store
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="box_RotatingLines">
            <RotatingLines
              visible={true}
              height="45"
              width="45"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}

        <hr className="hrfoo" />
        <p className="lastFooter">Copyright &#169; TOURS 2024</p>
      </footer>

      {/* Footer Menu For Mobile */}

      <div className="menubar">
        <Link to="/" className="box-menu active">
          <span className="iconMenuSpan">
            <HiOutlineHome />
          </span>
          <span>Home</span>
        </Link>
        <Link to="/oneday" className="box-menu active">
          <span className="iconMenuSpan">
            <HiOutlineHome />
          </span>
          <span>Tour</span>
        </Link>
        <Link to="/hotelpakse" className="box-menu">
          <span className="iconMenuSpan">
            <HiOutlineHome />
          </span>
          <span>Hotel</span>
        </Link>
        <Link to="/pakse" className="box-menu">
          <span className="iconMenuSpan">
            <HiOutlineHome />
          </span>
          <span>Restaurant</span>
        </Link>
        <Link to="/airplane" className="box-menu">
          <span className="iconMenuSpan">
            <HiOutlineHome />
          </span>
          <span>Ticket</span>
        </Link>
        <Link to="/package" className="box-menu">
          <span className="iconMenuSpan">
            <HiOutlineHome />
          </span>
          <span>Package</span>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
