import React from "react";

//Nav Component -
//contains dropdown and submit button 

export default function Nav({handleSubmit, onchange}){
    return(
        <div>
          <div className="week-container">
            <div className="category-form">
            <form onSubmit={handleSubmit}>
              <label className="category-select" ></label>
                <select className="select-week" name="week" id="week" onChange={onchange}>
                  <option value="week1">Week 1 - Intro to the School of Code Way</option>
                  <option value="week2">Week 2 - Fundamentals of proghramming with JavaScript</option>
                  <option value="week3">Week 3 - Creating applications with User in mind</option>
                  <option value="week4">Week 4 - The world of server side programming</option>
                  <option value="week5">Week 5 - Database & Conventions</option>
                  <option value="week6">Week 6 - Robust Code in Systems</option>
                  <option value="week7">Week 7 - Component-based thinking & Frameworks</option>
                  <option value="week8">Week 8 - Developing good, user-centric products in teams</option>
                </select>
                <input className="submit-button" type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
    )
}