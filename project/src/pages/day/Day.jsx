import React, {useState, useEffect} from 'react';
import {AiOutlinePlus, AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

import db from '../../firebase';
import {collection, addDoc, doc, onSnapshot, getDoc} from "firebase/firestore";
import './day.css';


 function Day() {
    
    const d = new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

  
  
    
    
    const addTask = (event) => {
      event.preventDefault();
      setTasks([...tasks, input])
      const docRef = addDoc(collection(db, "tasks"), {
        task: input,
        
      });
      
      setInput('');

      docRef = db.collection("tasks").doc("SF");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
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
             <button className='day_cont_add_form_btn'><AiOutlinePlus/></button>
             <input 
              type="text" 
              placeholder='Add a Task' 
              className='input-el'
              value={input}
              onChange={event => setInput(event.target.value)}
              />
           </form>

         </div>
         <div className='day_cont_task'>
    {tasks.map(task => (
         <div className='tasks'>
          <p className='tasks_name'>
            {task}  
          </p> 
          <button className='tasks_btn'><AiOutlineCheck size='1.5em' color='green'/></button>  
          <button className='tasks_btn' ><AiOutlineClose size='1.5em' color='red'/></button>  
         </div> 
    ))}
        </div> 
       </div>
     </div>
  
  );
}

export default Day;