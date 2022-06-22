//header
//Nav 
//main 
//footer

import Header from '../Header';
import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import {useState, useEffect} from "react";


export default function HelpCamper(){
    const [info, setInfo] = useState([])
 const [id, setId] = useState(0)
 const [week, setWeek] = useState("")

 
 useEffect(() => {//only run when the variable week 1 changes
  async function updateWeek(){
  console.log(week)
  const response = await fetch(`http://localhost:3000/${week}`)
  const data = await response.json()
  setInfo(data.payload)
}
updateWeek();
}, [id])

 function handleSubmit(e){
  e.preventDefault()
  const id = Math.floor(Math.random() * 100)
  setId(id)
}
function handleChange(e){
   setWeek(e.target.value)
   console.log(e.target.value, "target value")
  }

  return (
    <div className="everything">
      <div className="header-container">
        <Header />
        <Nav handleSubmit={handleSubmit} onchange={handleChange}/>
      </div>
        <div className="main-container">
          <Main info={info}/>
        </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}