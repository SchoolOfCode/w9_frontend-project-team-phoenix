import React from "react";
import logo from "../../Assets/PhoenixLogo.png"; 

//Header contains phoenix logo - img 
//Title 
//help link 

export default function Header(){
    return(
        <div className="top">
            <div className="header-content">
                <img className="logo" src={logo} alt="Logo"></img>
            </div>
            <div className="header-box">
                <h1 className="header">Bootcamper Assistant Pro 1.1</h1>
            </div>
            <div className="links">
                <a className="help-link" href="http://localhost:3002/home">Home</a>
                <a className="help-link" href="http://localhost:3002/Campers">Assistant</a>
                <a className="help-link" href="http://localhost:3002/help">Need Help?</a>
                <a className="help-link" href="http://localhost:3002/Contact">Contact</a>
            </div>
        </div>
    )
}

//<img src = {this.props.url} alt='something'/>  status
