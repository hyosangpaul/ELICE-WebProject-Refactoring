import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 20230315 사용될 components import
import Header from "../../Components/Header/Header";
import { ROUTE_ARR } from "../../Components/Route/ROUTE";

const Main = () => {
    return(
    <div>
        <Router>
            <Header />
            <Routes>
                {ROUTE_ARR.map((route, index) => {
                return (
                    <Route path={route.path} element={<route.element />} key={index} />
                );
                })}
            </Routes>
        </Router>
    </div>
    )
};

export default Main;