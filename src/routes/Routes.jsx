import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";


/* ============================== */
import Login from '../user/components/login_register/Login';
import Register from "../user/components/login_register/Register";
import ProductDetails from "../user/components/products/ProductDetails";
import ForgotPassword from "../user/components/login_register/ForgotPassword";



const Links = () => {
    return(
        <Router>
            <Routes>
                {/*====================== */}
                <Route exact path="/" Component={Home}/>
                {/*====================== */}
                <Route exact path="/productdetails/:id" Component={ProductDetails}/>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/forgotpassword" Component={ForgotPassword}/>

            </Routes>
        </Router>
    );
};

export default Links;