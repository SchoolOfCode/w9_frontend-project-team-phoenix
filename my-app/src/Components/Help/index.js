import Footer from "../Footer"
import Header from "../Header"

import "./index.css";


export default function Help(){

    return(
        <>
        <Header />
        <div className="contact-header">
            <p className="contact-welcome">Welcome to the Bootcamper Assistant <strong>FAQ Page</strong></p>
        </div>

        <div className="faq-question">
            <h1 className="faq-heading">How to use this website?</h1>

            <div className="faqbody">
                <p>First, you can click on the Assistant on the top of the page, and you will direct to another page which contains a dropdown list. Later, you can click on the list to select the week that you want to review. The webpage should display several resources for you. Have fun!</p>
            </div>
        </div>
        
        <div className="faq-question">
            <h1 className="faq-heading">Is this website free?</h1>

            <div className="faqbody">
                <p>Yes, the website is totally free for every bootcamper and anyone who are passionate about coding!</p>
            </div>
        </div>

        <div className="faq-question">
            <h1 className="faq-heading">How many languages can I learn here?</h1>

            <div className="faqbody">
                <p>We cover basic HTML, CSS and Javascript. Later on, we extend to React!</p>
            </div>
        </div>

        <div className="faq-question">
            <h1 className="faq-heading">Do you offer Live help?</h1>

            <div className="faqbody">
                <p>Currently, we don't offer Live Help as we are short of staff. Once we scale up our team, we will offer this service ASAP!</p>
            </div>
        </div>
        
        <div className="faq-question">
            <h1 className="faq-heading">Is there any place I can report any issue on this website?</h1>

            <div className="faqbody">
                <p>Yes, you can report any issues on the feedback form, which is located on thee bottom-right of the webpage.</p>
            </div>
        </div>        
        <Footer />
        </>
    )
}