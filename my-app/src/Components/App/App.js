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
 
 useEffect(() => {//only run when the variable week 1 changes
  async function updateWeek(){
  const response = await fetch(`http://localhost:3000/week1`)
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


  return (
    <div className="App">
      <Header />
      <Nav handleSubmit={handleSubmit}/>
      <Main info={info}/>
      <Footer />
    </div>
  );
}

export default App;
