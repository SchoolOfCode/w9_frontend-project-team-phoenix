import React from "react";
import logo from "../../Assets/PhoenixLogo.png"; 

//Header contains phoenix logo - img 
//Title 
//help link 

export default function Header(){
    return(
        <div className="header-container">
            <img className="logo" src={logo} alt="Logo"></img>
            <h1 className="header">School Of Code - Help the camper</h1>
            <a className="help-link" href="https://www.w3schools.com">Help?</a>
        </div>
    )
}

//<img src = {this.props.url} alt='something'/> 