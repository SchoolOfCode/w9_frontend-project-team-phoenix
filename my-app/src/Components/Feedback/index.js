import Header from "../Header";
import { useState } from "react";
import "./feedback.css"

export default function Feedback(){

    const [form, setForm] = useState(
        //Sets original stae to the form
        <div className="feedback-container">
        <form className="form">
            <h1 className="h1-feedback">Bootcamp Buddy - Feedback Form</h1>
            <div className="name-container">
            <p className="bootcamper-name">Full Name:</p>
                <input className="name"
                    type="text"
                    placeholder="first name"
                />
                <input className="name"
                    type="text"
                    placeholder="last name"
                />
            </div>
            <br></br>
            <br></br>
            <p className="feedback">Please leave your feedback below:</p>
            <textarea className="feedback-textbox"
                placeholder="Comment"
                name="comment"
            />
            <br></br>
            <br></br>
        </form>
        </div>
    )

    function onSubmit(){
       return (
           setForm(
            //re-renders page on submit to have following message
            <div className="refresh-container">
           <h1>Thank you for your feedback, we will get back to your shortly!</h1>
           </div>
           )
       )
    }
    
    return(
    <>
        <Header />
        {form}
        <div className="button-container">
        <button onClick={onSubmit} className="button">Submit</button>
        </div>
    </>
    )
}
