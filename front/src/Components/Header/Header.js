import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoIMG from "../../img/LogoIMG.jpg"

const Header = () => {
    return(
        <div>
            <HeaderSC>
                <NavLink to = '/'>
                    <LogoIMGSC src = {LogoIMG} alt = 'Logo'/>
                </NavLink>
                <DivSC>
                    <NavLink to = '/Login'>Login</NavLink>
                    <NavLink to = '/Cart'>Cart</NavLink>
                </DivSC>
            </HeaderSC>
            <NavBarSC>
                Categories :
            </NavBarSC>
        </div>
    )
}

const LogoIMGSC = styled.img`
    width : 8%
`

const NavBarSC = styled.div`
    border : 1px solid black;
    padding : 1.5em;
    margin : 1em;
`

const DivSC = styled.div`
    display : flex;
    justify-content : flex-end;

    & a {
        text-decoration : none;
        color : black;
        padding : 10px;
        border : 1px solid black;
        margin : 10px;
    }
`

const HeaderSC = styled.header`
    padding : 2em;
    margin : 1em;
`

export default Header;