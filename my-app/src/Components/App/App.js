import './App.css';
import HelpCamper from '../HelpCamper';
import Home from '../Home';
import Faq from '../Faq';
import Feedback from '../Feedback';
import Contact from '../Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {

  return (
    // We have 5 “pages” handled by the router: a home page, a campers page, a feedback page, a help page and a contact page. As you click around on the different <Link>s, the router renders the matching <Route>.
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
        <Faq />
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
