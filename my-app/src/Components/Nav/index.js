import React from "react";

//Nav Component -
//contains dropdown and submit button 

export default function Nav({onchange}){
    return(
        <div>
          <div className="week-container">
            <div className="category-form">
            <form >
              <label className="category-select" ></label>
                <select className="select-week" name="week" id="week" onChange={onchange}>
                  <option value="week1">Week 01 - Intro to the School of Code Way</option>
                  <option value="week2">Week 02 - Fundamentals of programming with JavaScript</option>
                  <option value="week3">Week 03 - Creating applications with User in mind</option>
                  <option value="week4">Week 04 - The world of server side programming</option>
                  <option value="week5">Week 05 - Database & Conventions</option>
                  <option value="week6">Week 06 - Robust Code in Systems</option>
                  <option value="week7">Week 07 - Component-based thinking & Frameworks</option>
                  <option value="week8">Week 08 - Developing good, user-centric products in teams</option>
                  <option value="week8">Week 09 - Real World Project Week | COMING SOON!</option>
                  <option value="week8">Week 10 - Retrospectives & Deployment | COMING SOON!</option>
                  <option value="week8">Week 11 - Adding depth to understanding | COMING SOON!</option>
                  <option value="week8">Week 12 - Platform and Cloud Engineering | COMING SOON!</option>
                  <option value="week8">Week 13 - 4 Week Final Project | COMING SOON!</option>
                  <option value="week8">Week 16 - Final Project Finish | COMING SOON!</option>
                  <option value="week8">Week 17 - Career Launchpad | COMING SOON!</option>
                </select>
                {/* <input className="submit-button" type="submit" value="Submit"></input> */}
              </form>
            </div>
          </div>
        </div>
    )
}