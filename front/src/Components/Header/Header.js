/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
// 20220314 이효상 ROUTE import
import { ROUTE, ROUTE_ARR } from "../Route/ROUTE";


const Header = () => {
  ROUTE_ARR.find((el) => el.path === location.pathname);

  return (
    <header>
        <NavLink to={ROUTE.HOME.link}>HOME</NavLink>
    </header>
  );
};

export default Header;