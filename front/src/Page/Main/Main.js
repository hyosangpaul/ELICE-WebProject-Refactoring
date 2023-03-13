import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 사용될 components import
import Home from "./Home";
import Header from "../../Components/Header/Header";
import Login from "../User/Login";
import Cart from "../Cart/Cart";


const Main = () => {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/Login' element = {<Login />} />
                <Route path = '/Cart' element = {<Cart />} />
            </Routes>    
        </Router>    
    )
};

export default Main;