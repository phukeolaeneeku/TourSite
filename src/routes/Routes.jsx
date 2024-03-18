import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Details from "../user/components/homepage/Details";
import Oneday from "../user/components/tourpage/Oneday";
import Halfday from "../user/components/tourpage/Halfday"
import Golf from "../user/components/tourpage/Golf"

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

                {/*====================== */}
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/forgotpassword" Component={ForgotPassword}/>

            </Routes>
        </Router>
    );
};

export default Links;