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
                <h1 className="header">Bootcamper Assistant Pro 1.1</h1>
                <a className="help-link" href="https://www.w3schools.com">Need Help?</a>
            </div>
            <div className="instructions">
                Welcome bootcamper. Need to find a resource to help with your issue? 
            </div>
            <div className="instructions">
                Please select the week you need help with
            </div>
        </div>
    )
}

//<img src = {this.props.url} alt='something'/>  status
