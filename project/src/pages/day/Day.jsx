import React from 'react';
import './day.css';


function Day() {

   const d = new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
 

  return (
  	
    <div className="day">           
       <h1 className='day_date'>{day}, {month} {date}</h1>
     </div>
  
  );
}

export default Day;