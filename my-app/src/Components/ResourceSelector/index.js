import React from "react";
import DisplayResource from "../DisplayResource";


export default function ResourceSelector({ info }){
   return (
       //rendering each resource on to screen
       info.map((resourceInfo) => {
        return (<DisplayResource data={resourceInfo}/>)
    })
   )
}
