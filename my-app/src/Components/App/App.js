import './App.css';
import Header from '../Header';
import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';

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

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Main />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
