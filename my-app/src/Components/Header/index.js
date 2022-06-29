import React from "react";
import logo from "../../Assets/PhoenixLogo.png"; 
import soclogo from "../../Assets/iaw-soc.png"; 

export default function Header(){
    return(
        <div className="header-container">
            <div className="header-content">
                <a href="/home"><img className="team-logo" src={logo} alt="Logo"></img></a>
                <a href="https://schoolofcode.com"><img className="soc-logo" src={soclogo} alt="socLogo"></img></a>
            </div>
            <div>
                <h1 className="app-header">Bootcamp Buddy</h1>
            </div>
            <div className="links-container">
                <a className="header-nav-link" href="/home">Home</a>
                <a className="header-nav-link" href="/Campers">Ask Buddy</a>
                <a className="header-nav-link" href="/help">Need Help?</a>
                <a className="header-nav-link" href="/Contact">Contact</a>
            </div>
        </div>
    )
}

