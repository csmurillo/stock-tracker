import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import WatchList from "./pages/WatchList";

import PrivateRoute from "./authentication/PrivateRoute";
import Security from "./pages/Security/security";
import Account from "./pages/Account/account";

import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import SmsAlerts from "./pages/SmsAlerts";
import DeleteAccount from "./pages/DeleteAccount";
import Stock from "./pages/Stock";

import Success from "./components/SuccessScreen/success-screen";
const Routes = () =>{
    return (
        <BrowserRouter>
        {/* <Header/> */}
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/success" exact component={Success}/>
                <Route path="/stock/:name" exact component={Stock}/>
                <PrivateRoute path="/watchlist" exact component={WatchList}/>
                <PrivateRoute path="/account" exact component={Account}/>
                <PrivateRoute path="/security" exact component={Security}/>
                <PrivateRoute path="/editprofile" exact component={EditProfile}/>
                <PrivateRoute path="/changepassword" exact component={ChangePassword}/>
                <PrivateRoute path="/enablealerts" exact component={SmsAlerts}/>
                <PrivateRoute path="/deleteaccount" exact component={DeleteAccount}/>
            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    );
}


export default Routes;
