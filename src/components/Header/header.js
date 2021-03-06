import React,{useEffect, useState} from 'react';
import logo from '../../assets/images/stock-tracker-logos.png';
import {FaUserCircle} from "react-icons/fa";
import './header.css';
import NavigationMenu from '../NavigationMenu/navigationmenu';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../authentication/authApi';

import SearchBox from '../SearchBox';


const Header = () =>{

    const [menuActive,setMenuActive]=useState(false);

    const { firstName, lastName } = isAuthenticated();

    const userNavigate = ()=>(
        <ul id="user-navigate" className="align-self-center d-md-flex d-none mr-4 mb-0">
            <li id="signup" style={{listStyleType:'none'}}>
                <Link to="/signup">
                    <Button className="btn btn-secondary" >
                        Signup
                    </Button>
                </Link>
            </li>
            <li id="login" style={{listStyleType:'none'}}>
                <Link to="/signin">
                    <Button className="ml-3 btn" styles={{backgroundColor:'rgb(138, 233, 138)', color:'white'}}>
                        Login
                    </Button>
                </Link>
            </li>
        </ul>
    );
    const userSignedin = ()=>(
        <div id="user-signedin" className="align-self-center d-md-flex d-none mr-4">
            <div class="dropdown">
                <div data-toggle="dropdown">
                    <div id="user-icon"><FaUserCircle style={{color:'lightgreen'}}/></div>
                    <div id="user-name">
                        {firstName} {lastName}
                    </div>
                </div> 
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropDownMenu">
                    <Link to="/watchlist">
                        <button id="watchlist" class="dropdown-item" type="button">Watch List</button>
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link to="/account">
                        <button id="account" class="dropdown-item" type="button">Account</button>
                    </Link>
                    <Link to="/security">
                        <button id="security" class="dropdown-item" type="button">Settings</button>
                    </Link>
                    <button id="logout" class="dropdown-item" type="button">Logout</button>
                </div>
            </div>
        </div>
    );

    const header= ()=>(
        <div id="header" className="d-flex justify-content-between" style={menuActive?{zIndex:2}:{}}>
                <div id="start" className="d-flex align-self-center ml-4">
                    <img id="logo"  src={logo}/>
                </div>
                <div id="end" className="d-flex justify-content-end" style={menuActive?{zIndex:2,backgroundColor:'white'}:{}}>
                    {isAuthenticated() && 
                        <div id="search-box-container" className="d-flex justify-content-center align-items-center w-100" style={{backgroundColor:'white'}}>
                                <div className="w-100">
                                    <SearchBox></SearchBox>
                                </div>
                        </div>
                    }
                    <div id="header-options-container" className="d-flex justify-content-center align-self-center">
                        <div className="d-md-none d-flex align-self-center">
                            <NavigationMenu setMenuActive={setMenuActive}></NavigationMenu>
                        </div>
                        {/* user: signed in */}
                        {/* desktop/laptop screen */}
                        {isAuthenticated() && userSignedin()}
                        {/* user: not signin */}
                        {/* desktop/laptop screen */}
                        {!isAuthenticated() && userNavigate()}
                    </div>
                </div>
                
        </div>
    );
    // useEffect(()=>{
    //     const one=document.getElementById('one');
    //     one.focus();
    // },[]);
    return (
        <header className="container">
            {header()}
            {/* <div class="dropdown show">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                    <a id="one" class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div> */}
        </header>
    );
};
export default Header;

