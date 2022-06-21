import React from "react";
import List from "../List";

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


export default function Main({ info }){
   return (
       info.map((e) => {
        return (<List data={e}/>)
    })
   )
            
            // <h2>{e.title}</h2>
    
   
}
//conditionally render docs || contact info || Workshop etc