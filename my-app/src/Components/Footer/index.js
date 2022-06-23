import React from "react";
import {SocialMediaIconsReact} from 'social-media-icons-react';


export default function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="footer">
                <div className="social">
                    <SocialMediaIconsReact borderColor="transparent" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="transparent" url="https://twitter.com/theSchoolOfCode" size="38" />
                    <SocialMediaIconsReact borderColor="transparent" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="transparent" url="https://www.facebook.com/schoolofcode/" size="38" />
                    <SocialMediaIconsReact borderColor="transpraent" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="transparent" url="https://www.linkedin.com/school/school-of-code/" size="38" />
                </div>
            <p className="copyright">© Copyright Phoenix Group 2022 | All rights reserved | In Association with School of Code</p>
            <p className="feedback-link"><a href="http://localhost:3002/feedback">feedback</a></p>
        </div>
        </div>
        </>
    )
}