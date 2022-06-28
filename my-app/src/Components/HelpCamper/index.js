
import Header from '../Header';
import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import {useState, useEffect} from "react";


export default function HelpCamper(){
  //All info from the fetch request will be saved in info state
  const [info, setInfo] = useState([]) 
  //initial state set to week 1 so page renders automatically with data
  const [week, setWeek] = useState("week1")

 
 useEffect(() => {
  async function updateWeek(){
  const response = await fetch(`http://localhost:3000/${week}`)
  const data = await response.json()
  setInfo(data.payload)
}
updateWeek();
}, [week])

function handleChange(e){
   setWeek(e.target.value)
  }

  return (
    <div>
        <Header />
        <Nav onchange={handleChange}/>
        <Main info={info}/>
        <Footer />
    </div>

  );
}