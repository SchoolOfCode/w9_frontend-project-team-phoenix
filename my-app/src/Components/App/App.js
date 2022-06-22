import './App.css';
import HelpCamper from '../HelpCamper';
import Home from '../Home';
import Help from '../Help';
import Feedback from '../Feedback';
import Contact from '../Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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

  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  
    <Switch>
      <Route path="/Campers">
        <HelpCamper />
      </Route>
    </Switch>
  
    <Switch>
      <Route path="/feedback">
        <Feedback />
      </Route>
    </Switch>
  
    <Switch>
      <Route path="/help">
        <Help />
      </Route>
    </Switch>
    <Switch>
      <Route path="/Contact">
        <Contact />
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
