import React from "react";

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <div>
                <div className="facebook">Facebook</div>
                <div className="twitter">Twitter</div>
                <div className="linked-in">LinkedIn</div>
            </div>
            <p className="copyright">copyright message</p>
            <p className="feedback-link"><a href="https://en.wikipedia.org/wiki/Feedback">feedback</a></p>
        </footer>
        </>
    )
}