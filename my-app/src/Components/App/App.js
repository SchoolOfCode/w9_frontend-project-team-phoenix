import './App.css';
import Header from '../Header';
import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import {useState, useEffect} from "react";

//Header component - 
//contains logo, title and help link 

//Nav Component -
//contains dropdown and submit button 

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

//Footer -
  // feedback link 
  // copyright info 
  // socials

  //States are only going to change once according to what is submitted
  //props for title 
  //props for content 

function App() {
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
    <div>
      <div>
        <Header />
        <Nav handleSubmit={handleSubmit} onchange={handleChange}/>
      </div>
        <div>
          <Main info={info}/>
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
