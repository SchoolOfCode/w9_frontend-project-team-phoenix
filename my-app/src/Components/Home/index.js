//On our home page we want our Header
//Our text
import Footer from "../Footer"
import Header from "../Header"

//Why we Created
//How to use

export default function Home(){
    return(
        <>
        <Header />
        <h1>Welcome to Team Phoenix's Bootcamper Assistant tool!</h1>
        <h2>We created this service to help our fellow bootcampers and ourselves by providing important information each week</h2>
        <h3>To access our resources, please click the button below! Enjoy :)</h3>
        <a href="http://localhost:3002/Campers">
            <button>Click here for access</button>
        </a>
        <Footer />
        </>
    )
}