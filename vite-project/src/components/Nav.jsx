// importing REACT
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="main-nav">
            <ul>
                {/*Links for cats*/}
                <li><NavLink to="/cats" >Cats</NavLink></li>
                {/*Links for dogs*/}
                <li><NavLink to="/dogs" >Dogs</NavLink></li>
                {/*Links for birds*/}
                <li><NavLink to="/birds" >Birds</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;