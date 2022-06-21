import React from "react";

//Nav Component -
//contains dropdown and submit button 

export default function Nav(){
    return(
        <div>
        <div className="week-container">
            <div className="category-form">
            <form>
            <label className="category-select" >Week Number: </label>

          <select className="select-week" name="week" id="week">
            <option value="week-1">Week 1</option>
            <option value="week-2">Week 2</option>
            <option value="week-3">Week 3</option>
            <option value="week-4">Week 4</option>
            <option value="week-5">Week 5</option>
            <option value="week-6">Week 6</option>
            <option value="week-7">Week 7</option>
            <option value="week-8">Week 8</option>


          </select>

          <input className="submit-button" type="submit" value="Submit"></input>

        </form>
      </div>
    </div>
    </div>
    )
}