import React from "react"
import puckLogo from "../assets/header/cryptopunk-logo.png"
import searchLogo from "../assets/header/search.png"
import themeIcon from "../assets/header/theme-switch.png"
function Header()
{
    return(
        <div className="header">
            <div className="puck-logo">
                <img src={puckLogo} className="punk-logo" alt="" />
            </div>
            <div className="SearchLogo">
                <img src={searchLogo} alt="" />
                <input className="searchBar"type="text" placeholder="Collections, items or User"/>
            </div>

            <div className="headerOptions">
                <p>Drops</p>
                <p>Market Place</p>
                <p>Create</p>
            </div>
            <div className="themeIcon-div">
                <img src={themeIcon} class="themeIcon" alt="" />
            </div>
            <div className="btn">
                <button className="btnModify">GET IN</button>
            </div>

        </div>  
    );

}

export default Header;