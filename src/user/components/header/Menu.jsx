import "./css/menu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [tourHovered, setTourHovered] = useState(false);
  const [hotelHovered, setHotelHovered] = useState(false);
  const [restaurantHovered, setRestaurantHovered] = useState(false);
  const [ticketHovered, setTicketHovered] = useState(false);

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

  return (
    <div className="navbar">
      <div className="menu">
        <Link to="/"
          className="list-menu"
          onMouseEnter={handleTourMouseEnter}
          onMouseLeave={handleTourMouseLeave}
        >
          <div className="btn-menu">TOUR</div>
          {tourHovered && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  
                  <Link to="/oneday"><p>One day tour</p></Link>
                </li>
                <li>
                <Link to="/halfday"><p>Half day tour</p></Link>
                </li>
                <li>
                <Link to="/golf"><p>Golf</p></Link>
                </li>
                <li>
                  <Link to="/nightday"><p>Night tour</p></Link>
                </li>
              </ul>
            </div>
          )}
        </Link>
        <Link to="/hotel"
          className="list-menu"
          onMouseEnter={handleHotelMouseEnter}
          onMouseLeave={handleHotelMouseLeave}
        >
          <div className="btn-menu">HOTEL</div>
          {hotelHovered && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/pakse"><p>Pakse</p></Link>
                </li>
                <li>
                  <Link to="/paksong"><p>Paksong</p></Link>
                </li>
                <li>
                  <Link to="/siphandone"><p>Siphandone</p></Link>
                </li>
              </ul>
            </div>
          )}
        </Link>
        <Link to="/restaurant"
          className="list-menu"
          onMouseEnter={handleRestaurantMouseEnter}
          onMouseLeave={handleRestaurantMouseLeave}
        >
          <div className="btn-menu">RESTAURANT</div>
          {restaurantHovered && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="#"><p>Pakse</p></Link>
                </li>
                <li>
                  <Link to="#"><p>Paksong</p></Link>
                </li>
                <li>
                  <Link to="#"><p>Siphandone</p></Link>
                </li>
              </ul>
            </div>
          )}
        </Link>
        <div
          className="list-menu"
          onMouseEnter={handleTicketMouseEnter}
          onMouseLeave={handleTicketMouseLeave}
        >
          <div className="btn-menu">TICKET</div>
          {ticketHovered && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="#"><p>Airplane</p></Link>
                </li>
                <li>
                  <Link to="#"><p>Rent car</p></Link>
                </li>
                <li>
                  <Link to="#"><p>entertainment</p></Link>
                </li>
                <li>
                  <Link to="#"><p>Massage</p></Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="btn-menu">
          <Link to="#">GUID</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
