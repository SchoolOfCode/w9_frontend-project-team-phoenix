import React from "react";

//Main - 
//contain docs container 
  // - heading prop 
  // - content prop
//contact information container 
  // - heading prop 
  // - contact image prop 
  // - content prop 
//workshop container 
  // - Title prop
  // - content prop


export default function Main(){
    return(
        <>
            <div className="info-container">
                <h2 className="section-heading">Docs</h2> 
                <p className="docs-content">content</p>
            </div>
        </>
    )
}
//conditionally render docs || contact info || Workshop etc