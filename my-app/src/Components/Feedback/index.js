import Header from "../Header";
import Footer from "../Footer";
import "./feedback.css";
import feedbackform from "../../Assets/feedback-form.png"; 

export default function Feedback(){
    return(
        <>
            <Header />        
            <div className="contact-header">
                <p className="contact-welcome">Welcome to the Bootcamper Assistant <strong>Feedback Page</strong></p>
            </div>
            <img className="feedback-form" src={feedbackform} alt="Feedback Form"></img>
            <Footer />
        </>
    )
}





