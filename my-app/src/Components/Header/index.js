import React from "react";
import logo from "../../Assets/PhoenixLogo.png"; 
import soclogo from "../../Assets/iaw-soc.png"; 

export default function Header(){
    return(
        <div className="top">
            <div className="header-content">
                <a href="/home"><img className="logo" src={logo} alt="Logo"></img></a>
                <a href="https://schoolofcode.com"><img className="soclogo" src={soclogo} alt="socLogo"></img></a>
            </div>
            <div className="header-box">
                <h1 className="header">Bootcamp Buddy</h1>
            </div>
            <div className="links">
                <a className="help-link" href="/home">Home</a>
                <a className="help-link" href="/Campers">Ask Buddy</a>
                <a className="help-link" href="/help">Need Help?</a>
                <a className="help-link" href="/Contact">Contact</a>
            </div>
        </div>
    )
}

