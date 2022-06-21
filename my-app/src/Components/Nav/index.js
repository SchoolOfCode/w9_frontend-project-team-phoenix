import React from "react";

//Nav Component -
//contains dropdown and submit button 

export default function Nav({handleSubmit, onchange}){
    return(
        <div>
        <div className="week-container">
            <div className="category-form">
            <form onSubmit={handleSubmit}>
            <label className="category-select" >Week Number: </label>

          <select className="select-week" name="week" id="week" onChange={onchange}>
            <option value="week1">Week 1</option>
            <option value="week2">Week 2</option>
            <option value="week3">Week 3</option>
            <option value="week4">Week 4</option>
            <option value="week5">Week 5</option>
            <option value="week6">Week 6</option>
            <option value="week7">Week 7</option>
            <option value="week8">Week 8</option>


          </select>

          <input className="submit-button" type="submit" value="Submit"></input>

        </form>
      </div>
    </div>
    </div>
    )
}