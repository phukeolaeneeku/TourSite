import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Details from "../user/components/homepage/Details";
import Oneday from "../user/components/tourpage/Oneday";
import Halfday from "../user/components/tourpage/Halfday";
import Golf from "../user/components/tourpage/Golf";
import Nightday from "../user/components/tourpage/Nightday";

import HotelPakse from "../user/components/hotelpage/HotelPakse";
import HotelPaksong from "../user/components/hotelpage/HotelPaksong";
import HotelSiphandone from "../user/components/hotelpage/HotelSiphandone";

import Pakse from "../user/components/restaurantpage/Pakse";
import Paksong from "../user/components/restaurantpage/Paksong";
import Siphandone from "../user/components/restaurantpage/Siphandone";

import Airplane from "../user/components/ticketpage/Airplane";
import Rent from "../user/components/ticketpage/Rent";
import Entertainment from "../user/components/ticketpage/Entertainment";
import Massage from "../user/components/ticketpage/Massage";

import Package from "../user/components/packagepage/Package";

import AccountUser from "../user/components/accountUser/AccountUser";
import Profile from "../user/components/accountUser/Profile";

/* =============== Form login, register, Find password =============== */
import Login from "../user/components/login_register/Login";
import Register from "../user/components/login_register/Register";
import ForgotPassword from "../user/components/login_register/ForgotPassword";

/* =========== Admin components ============= */
import Dashboard from "../admin/Dashboard";
import Tour_admin from "../admin/components/managertour/Tour_Admin";
import Addtour_admin from "../admin/components/managertour/AddTour";
import Users from "../admin/components/managerUser/Users";
import User_details from "../admin/components/managerUser/User_details";
import Account_Admin from "../admin/components/accountAdmin/AccountAdmin";
import Edit_Account from '../admin/components/accountAdmin/EditAccount';
import Admins from "../admin/components/managerAdmin/Admins"
import Add_Admin from "../admin/components/managerAdmin/AddAdmin"
import Edit_Admin from "../admin/components/managerAdmin/EditAdmin"
import Hotel from "../admin/components/managerhotel/Hotel";
import Edit_Hotel from "../admin/components/managerhotel/EditHotel"
import Restaurant_Admin from "../admin/components/managerRestaurant/Restaurant_Admin"
import EditRestaurant from "../admin/components/managerRestaurant/EditRestaurant";
import AddRestaurant from "../admin/components/managerRestaurant/AddRestaurant";
import PackageAdmin from "../admin/components/packageAdmin/PackageAdmin";
import TicketAdmin from "../admin/components/ticketAdmin/TicketAdmin";

const Links = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/details" Component={Details} />
        <Route exact path="/oneday" Component={Oneday} />
        <Route exact path="/halfday" Component={Halfday} />
        <Route exact path="/golf" Component={Golf} />
        <Route exact path="/nightday" Component={Nightday} />

        <Route exact path="/hotelpakse" Component={HotelPakse} />
        <Route exact path="/hotelpaksong" Component={HotelPaksong} />
        <Route exact path="/hotelsiphandone" Component={HotelSiphandone} />

        <Route exact path="/pakse" Component={Pakse} />
        <Route exact path="/paksong" Component={Paksong} />
        <Route exact path="/siphandone" Component={Siphandone} />

        <Route exact path="/airplane" Component={Airplane} />
        <Route exact path="/rent" Component={Rent} />
        <Route exact path="/entertainment" Component={Entertainment} />
        <Route exact path="/massage" Component={Massage} />


        <Route exact path="/package" Component={Package} />

        <Route exact path="/account-user" Component={AccountUser} />
        <Route exact path="/profile-user" Component={Profile} />

        {/*========== Form login, register, Find password ============ */}
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/forgotpassword" Component={ForgotPassword} />

        {/* =========== Admin components ============= */}
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/tour-admin" Component={Tour_admin} />
        <Route path="/addtour-admin" Component={Addtour_admin} />
        <Route path="/users" Component={Users} />
        <Route path="/user-details" Component={User_details} />
        <Route path="/account-admin" Component={Account_Admin} />
        <Route path="/edit-account" Component={Edit_Account} />
        <Route path="/admins" Component={Admins} />
        <Route path="/add-admin" Component={Add_Admin} />
        <Route path="/edit-admin" Component={Edit_Admin} />
        <Route path="/hotel-admin" Component={Hotel} />
        <Route path="/edit-hotel" Component={Edit_Hotel} />
        <Route path="/restaurant-admin" Component={Restaurant_Admin} />
        <Route path="/edit-restaurant" Component={EditRestaurant} />
        <Route path="/add-restaurant" Component={AddRestaurant} />
        <Route path="/package-admin" Component={PackageAdmin} />
        <Route path="/ticket-admin" Component={TicketAdmin} />
        
      </Routes>
    </Router>
  );
};

export default Links;
