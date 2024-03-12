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
            <div
                className="list-menu"
                onMouseEnter={handleTourMouseEnter}
                onMouseLeave={handleTourMouseLeave}
            >   
                <div className="btn-menu">TOUR</div>
                {tourHovered && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <Link to="#">One day tour</Link>
                      </li>
                      <li>
                        <Link to="#">Half day tour</Link>
                      </li>
                      <li>
                        <Link to="#">Golf</Link>
                      </li>
                      <li>
                        <Link to="#">Night tour</Link>
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
                      <li>
                        <Link to="#">Pakse</Link>
                      </li>
                      <li>
                        <Link to="#">Paksong</Link>
                      </li>
                      <li>
                        <Link to="#">Siphandone</Link>
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
                      <li>
                        <Link to="#">Pakse</Link>
                      </li>
                      <li>
                        <Link to="#">Paksong</Link>
                      </li>
                      <li>
                        <Link to="#">Siphandone</Link>
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
                      <li>
                        <Link to="#">Airplane</Link>
                      </li>
                      <li>
                        <Link to="#">Rent car</Link>
                      </li>
                      <li>
                        <Link to="#">entertainment</Link>
                      </li>
                      <li>
                        <Link to="#">Massage</Link>
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