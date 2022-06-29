
import Header from '../Header';
import SelectForm from '../SelectForm';
import Main from '../Main';
import Footer from '../Footer';
import {useState, useEffect} from "react";


export default function HelpCamper(){
  //All info from the fetch request will be saved in info state
  const [info, setInfo] = useState([]) 
  //initial state set to week 1 so page renders automatically with data
  const [weekNumber, setWeekNumber] = useState("week1")

 
 useEffect(() => {
  //fetches backend API and rerenders when the week number changes in the SelecForm component
  async function updateWeek(){
  const response = await fetch(`http://localhost:3000/${weekNumber}`)
  const data = await response.json()
  setInfo(data.payload)
}
updateWeek();
}, [weekNumber])

function handleChange(e){
   setWeekNumber(e.target.value)
  }

  return (
    <div>
        <Header />
        <SelectForm onchange={handleChange}/>
        <Main info={info}/>
        <Footer />
    </div>

  );
}