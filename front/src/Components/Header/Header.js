/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
// 20220314 이효상 ROUTE import
import { ROUTE, ROUTE_ARR } from "../Route/ROUTE";
import { HeaderSC } from "./HeaderSC";


const Header = () => {
  ROUTE_ARR.find((el) => el.path === location.pathname);

  return (
    <HeaderSC>
        <NavLink to={ROUTE.HOME.link}>HOME</NavLink>
        <NavLink to={ROUTE.LOGIN.link}>LOGIN</NavLink>
        <NavLink to={ROUTE.REGISTER.link}>REGISTER</NavLink>
        <NavLink to={ROUTE.FAVORITE.link}>FAVORITE</NavLink>
        <NavLink to={ROUTE.CART.link}>CART</NavLink>
        <NavLink to={ROUTE.USERMAIN.link}>USERMAIN</NavLink>
    </HeaderSC>
  );
};

export default Header;