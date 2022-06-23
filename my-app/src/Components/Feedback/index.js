import Header from "../Header";
import { useState } from "react";
import "./feedback.css"

export default function Feedback(){

    const [form, setForm] = useState(
        <div className="feedback-container">
        <form className="form">
            <div className="name-container">
            <p className="bootcamper-name">Bootcamper Name:</p>
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
            <p className="feedback">Feedback:</p>
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
           setForm(<h1>Thank you for your feedback, we will get back to your shortly!</h1>)
       )
    }
    
    return(
    <>
        <Header />
        {form}
        <button onClick={onSubmit} className="button">Submit</button>
    </>
    )
}
