import Footer from "../Footer";
import Header from "../Header";
import schoolofcode from "../../Assets/SchoolOfCode.jpg"; 
import "./contact.css";

export default function Contact(){
    return(
        <>
            <Header />
            <div className="contact-header">
                <p className="contact-welcome">Welcome to the Bootcamp Buddy <strong>Contact Page</strong></p>
            </div>
            <div className="contact-text">
                <p>School of Code offers free intensive and flexible coding courses open to applicants of all backgrounds.</p>

                <p>You don’t need to have any previous technical experience or any qualifications. All you need is motivation, and to like solving problems!</p>
                
                <p>School of Code's purpose is to give everyone a route into technology, and teach them the skills they need to leap into the industry
                
                The rise in automation will have a dramatic impact on the job market. We aim to prepare people with the tech skills and soft skills to become collaborative, creative coders.</p>
                
                <p>So far, we've achieved an average of 85% employment from our previous cohorts (including during the COVID-19 pandemic). But, more important than stats, we've helped people completely change their lives for the better.
                </p>
            </div>
            <div className="contact-address-container">
                <div className="contact-box-container">
                    <img className="schoolofcode-contact-image" src={schoolofcode} alt="School of Code"></img>

                    <div className="contact-address-details">
                    <p className="contact-name">School Of Code</p>
                        <div>Custard Factory</div>
                        <div>Gibb Street</div>
                        <div>Birmingham</div>
                        <div>B9 4AA</div>
                        <br></br>
                        <div>School of Code Ltd is registered in England, Company No. 09793790</div>
                    </div>
                </div>
            </div>
            <div className="contact-company-details ">
                <p><strong>Remote Learning!</strong></p><p>
                Covid-19 hit us half way through our third bootcamp, and we had to immediately learn the ins and outs of learning remotely.

                We spent the time exploring how to do it best, and we are now offering fully remote and blended courses.

                The benefit is that we can help more people than before, which helps us achieve our core value of helping more and different kinds of people into tech.</p>

                <p>You don’t need to have any previous technical experience or any qualifications. All you need is motivation, and to like solving problems!</p>
                
                <p>School of Code's purpose is to give everyone a route into technology, and teach them the skills they need to leap into the industry
                
                The rise in automation will have a dramatic impact on the job market. We aim to prepare people with the tech skills and soft skills to become collaborative, creative coders.</p>
                
                <p>So far, we've achieved an average of 85% employment from our previous cohorts (including during the COVID-19 pandemic). But, more important than stats, we've helped people completely change their lives for the better.
                </p>
            </div>
            <Footer />
        </>
    )
}


