import React, {useState} from 'react';
import './day.css';


function Day() {
    let myTasks = []
    const d = new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()

    const [taskList, setTaskList] = useState([])

   function addTask(e){
     e.preventDefault()
    setTaskList([...taskList, {task: e.target.task_.value}])
    e.target.task_.value =""
    console.log(myTasks)
   }
    
 

  return (
  	
    <div className="day">           
       <div className="day_comp">
          <h1 className='day_comp_title'>Task Completed</h1>
       </div>
       <div className='day_cont'>
         <div className='day_cont_top'>
        <h1 className='day_date'>{day}, {month} {date}</h1> 
         </div>
         <div className='day_cont_add'>
           <form  className='day_cont_add_form' onSubmit={addTask}>
             <input 
              type="text" 
              placeholder='Add a Task' 
              className='input-el'
              name='task_'
              />
           </form>

         </div>
         <div className='day_cont_task'>
    {taskList.map((singleTask, index) =>(
         <div key={index} className='tasks'>
          <p className='tasks_name' key={index}>
            {singleTask.task}  
          </p>   
         </div> 
    ))}
        </div> 
       </div>
     </div>
  
  );
}

export default Day;