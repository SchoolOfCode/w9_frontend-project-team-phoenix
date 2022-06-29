import Footer from "../Footer"
import Header from "../Header"
import "./index.css"
import pic from "../../Assets/workshops.jpg"

export default function Home(){
    return(
        <>
        <Header />
        <div className="Home-container">
            <div className="text-container">
            <img className="home-image" src={pic} alt="Chris"></img>
                <div class="centered">
                <h1 className="h1-home-text">Welcome to Team Phoenix's Bootcamp Buddy</h1>
                <h2 className="h2-home-text">We created this App to help SoC bootcampers by providing easy access to resources from each weeks topics covered during the bootcamp</h2>
                <h3 className="h3-home-text">To access our resources, please click the button below</h3>
                <a href="http://localhost:3002/Campers">
                    <button className="home-button">Click here for access</button>
                </a>
            </div>
                </div>
        </div>
        <Footer /> 
        </>
    )
}