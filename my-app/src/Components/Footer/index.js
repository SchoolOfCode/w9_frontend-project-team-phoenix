import React from "react";

export default function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="footer">
                <div className="social">
                    <div className="facebook"><a href="https://www.facebook.com/schoolofcode/">Facebook</a></div>
                    <div className="twitter"><a href="https://twitter.com/theSchoolOfCode">Twitter</a></div>
                    <div className="linked-in"><a href="https://www.linkedin.com/school/school-of-code/">LinkedIn</a></div>
                </div>
            <p className="copyright">© Copyright Phoenix Group 2022 | All rights reserved</p>
            <p className="feedback-link"><a href="http://localhost:3002/feedback">feedback</a></p>
        </div>
        </div>
        </>
    )
}