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
    </HeaderSC>
  );
};

export default Header;