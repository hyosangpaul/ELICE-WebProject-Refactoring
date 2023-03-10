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
                <NavLink to = '/Login'>Login</NavLink>
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

const HeaderSC = styled.header`
    padding : 2em;
    margin : 1em;

    & a {
        text-decoration : none;
        color : black;
    }
`

export default Header;