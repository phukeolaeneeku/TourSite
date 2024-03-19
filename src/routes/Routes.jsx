import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Details from "../user/components/homepage/Details";
import Oneday from "../user/components/tourpage/Oneday";
import Halfday from "../user/components/tourpage/Halfday"
import Golf from "../user/components/tourpage/Golf"
import Nightday from "../user/components/tourpage/Nightday"

import Hotel from "../user/components/hotelpage/Hotel";
import Pakse from "../user/components/hotelpage/Pakse";
import Paksong from "../user/components/hotelpage/Paksong";
import Siphandone from "../user/components/hotelpage/Siphandone";

import Restaurant from "../user/components/restaurantpage/Restaurant";


/* ============================== */
import Login from '../user/components/login_register/Login';
import Register from "../user/components/login_register/Register";
import ForgotPassword from "../user/components/login_register/ForgotPassword";



const Links = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/details" Component={Details}/>
                <Route exact path="/oneday" Component={Oneday}/>
                <Route exact path="/halfday" Component={Halfday}/>
                <Route exact path="/golf" Component={Golf}/>
                <Route exact path="/nightday" Component={Nightday}/>

                <Route exact path="/hotel" Component={Hotel}/>
                <Route exact path="/pakse" Component={Pakse}/>
                <Route exact path="/paksong" Component={Paksong}/>
                <Route exact path="/siphandone" Component={Siphandone}/>

                <Route exact path="/restaurant" Component={Restaurant}/>

                {/*====================== */}
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/forgotpassword" Component={ForgotPassword}/>

            </Routes>
        </Router>
    );
};

export default Links;