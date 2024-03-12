import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Account from "../user/components/account/Account";
import General from "../user/components/account/General";
import Contact from "../user/components/account/Contact";
import Password from "../user/components/account/Password";
import Payment from "../user/components/cart/Payment";
import SuccessfulBuy from "../user/components/cart/SuccessfulBuy";
import Cart from "../user/components/cart/Cart";
import Address from "../user/components/cart/Address";
import Contacts from "../user/components/contact/Contact";
import Bill from "../user/components/order/Bill";
import Dashboard from "../admin/Dashboard";
import Post from "../admin/components/post/Post";
import ProductForm from "../admin/components/post/ProductForm";

/* ============================== */
import Login from '../user/components/login_register/Login';
import Register from "../user/components/login_register/Register";
import Order from "../user/components/order/Order";
import ProductDetails from "../user/components/products/ProductDetails";
import OrderPage from "../admin/components/orderPage/OrderPage";
import OrderBill from "../admin/components/orderPage/OrderBill";
import Admins from "../admin/components/menagerAdmin/Admins";
import Product from "../admin/components/products/Product";
import Text from "../user/components/order/Text";
import ForgotPassword from "../user/components/login_register/ForgotPassword";

// ===============================
import Users from "../admin/components/menagerUser/Users";
import User from "../admin/components/menagerUser/User";
import Admin from "../admin/components/menagerAdmin/Admin";
import AddAdmin from "../admin/components/menagerAdmin/AddAdmin";
import Admin_acount from "../admin/components/menagerAdmin/Admin_acount";


const Links = () => {
    return(
        <Router>
            <Routes>
                {/*====================== */}
                <Route exact path="/" Component={Home}/>
                <Route exact path="/account" Component={Account}/>
                <Route exact path="/account/general" Component={General}/>
                <Route exact path="/account/contact" Component={Contact}/>
                <Route exact path="/account/password" Component={Password}/>
                <Route exact path="/payment" Component={Payment}/>
                <Route exact path="/cart/address" Component={Address}/>
                <Route exact path="/contacts" Component={Contacts}/>
                <Route exact path="/order" Component={Order}/>
                <Route exact path="/bill/:id" Component={Bill}/>
                <Route exact path="/cart/successfulBuy" Component={SuccessfulBuy}/>
                <Route exact path="/text" Component={Text}/>

                {/*====================== */}
                <Route exact path="/productdetails/:id" Component={ProductDetails}/>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/cart" Component={Cart}/>
                <Route exact path="/forgotpassword" Component={ForgotPassword}/>

                {/* Admin routes */}
                <Route exact path="/dashboard" Component={Dashboard}/>
                <Route exact path="/post" Component={Post}/>
                <Route exact path="/post2" Component={ProductForm}/>
                <Route exact path="/orderpage" Component={OrderPage}/>
                <Route exact path="/orderbill" Component={OrderBill}/>
                <Route exact path="/product" Component={Product}/>
                <Route exact path="/users/user" Component={User}/>
                <Route exact path="/users" Component={Users}/>
                <Route exact path="/admins" Component={Admins}/>
                <Route exact path="/admins/admin" Component={Admin}/>
                <Route exact path="/addadmin" Component={AddAdmin}/>
                <Route exact path="/adminacount" Component={Admin_acount}/>
            </Routes>
        </Router>
    );
};

export default Links;