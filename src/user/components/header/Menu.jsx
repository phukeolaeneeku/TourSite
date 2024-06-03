import "./css/menu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [tourHovered, setTourHovered] = useState(false);
  const [hotelHovered, setHotelHovered] = useState(false);
  const [restaurantHovered, setRestaurantHovered] = useState(false);
  const [ticketHovered, setTicketHovered] = useState(false);
  const [packageHovered, setPackageHovered] = useState(false);
  const [kakaoHovered, setKakaoHovered] = useState(false);
  const [ticketGuide, setTicketGuide] = useState(false);

  const handleTourMouseEnter = () => {
    setTourHovered(true);
  };
  const handleTourMouseLeave = () => {
    setTourHovered(false);
  };

  const handleHotelMouseEnter = () => {
    setHotelHovered(true);
  };
  const handleHotelMouseLeave = () => {
    setHotelHovered(false);
  };

  const handleRestaurantMouseEnter = () => {
    setRestaurantHovered(true);
  };
  const handleRestaurantMouseLeave = () => {
    setRestaurantHovered(false);
  };

  const handleTicketMouseEnter = () => {
    setTicketHovered(true);
  };
  const handleTicketMouseLeave = () => {
    setTicketHovered(false);
  };

  const handlePackageMouseEnter = () => {
    setPackageHovered(true);
  };
  const handlePackageMouseLeave = () => {
    setPackageHovered(false);
  };
  const handleKakaoMouseEnter = () => {
    setKakaoHovered(true);
  };
  const handleKakaoMouseLeave = () => {
    setKakaoHovered(false);
  };

  const handleGuideMouseEnter = () => {
    setTicketGuide(true);
  };
  const handleGuideMouseLeave = () => {
    setTicketGuide(false);
  };

  return (
    <div className="navbar">
      <div className="menu">
        <Link to="/" className="list-menu">
          <p className="btn-menu">HOME</p>
        </Link>

        <div
          className="list-menu"
          onMouseEnter={handleTourMouseEnter}
          onMouseLeave={handleTourMouseLeave}
        >
          <div className="btn-menu">TOUR</div>
          {tourHovered && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/oneday">
                    <p className="txtP">One day tour</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/halfday">
                    <p className="txtP">Half day tour</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/golf">
                    <p className="txtP">Golf</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/nightday">
                    <p className="txtP">Night tour</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="list-menu"
          onMouseEnter={handleHotelMouseEnter}
          onMouseLeave={handleHotelMouseLeave}
        >
          <div className="btn-menu">HOTEL</div>
          {hotelHovered && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/hotelpakse">
                    <p className="txtP">Pakse</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/hotelpaksong">
                    <p className="txtP">Paksong</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/hotelsiphandone">
                    <p className="txtP">Siphandone</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="list-menu"
          onMouseEnter={handleRestaurantMouseEnter}
          onMouseLeave={handleRestaurantMouseLeave}
        >
          <div className="btn-menu">RESTAURANT</div>
          {restaurantHovered && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/pakse">
                    <p className="txtP">Pakse</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/paksong">
                    <p className="txtP">Paksong</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/siphandone">
                    <p className="txtP">Siphandone</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/entertainment">
                    <p className="txtP">Entertainment</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="list-menu"
          onMouseEnter={handleTicketMouseEnter}
          onMouseLeave={handleTicketMouseLeave}
        >
          <div className="btn-menu">TICKET</div>
          {ticketHovered && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/airplane">
                    <p className="txtP">Airplane</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/rent">
                    <p className="txtP">Rent car</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>

                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/massage">
                    <p className="txtP">Massage</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>
        
        <div
          className="list-menu"
          onMouseEnter={handlePackageMouseEnter}
          onMouseLeave={handlePackageMouseLeave}
        >
          <div className="btn-menu">PACKAGE</div>
          {packageHovered && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/package">
                    <p className="txtP">3 Days</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/package4days">
                    <p className="txtP">4 Days</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/package5days">
                    <p className="txtP">5 Days</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="list-menu"
          onMouseEnter={handleKakaoMouseEnter}
          onMouseLeave={handleKakaoMouseLeave}
        >
          <div className="btn-menu">KAKAO</div>
          {kakaoHovered && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/package">
                    <p className="txtP">.......</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="/package4days">
                    <p className="txtP">......</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="list-menu"
          onMouseEnter={handleGuideMouseEnter}
          onMouseLeave={handleGuideMouseLeave}
        >
          <div className="btn-menu">GUIDE</div>
          {ticketGuide && (
            <div className="dropdown-menu">
              <ul>
                <li className="menu_inline">
                  <Link to="/korean">
                    <p className="txtP">Korean</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
                <div className="hr"></div>
                <li className="menu_inline">
                  <Link to="#">
                    <p className="txtP">Laotian</p>
                  </Link>
                  <MdKeyboardArrowRight id="icon_AiOutlineRight" />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
