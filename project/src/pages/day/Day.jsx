import React, {useState, useEffect} from 'react';
import {AiOutlinePlus, AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import './day.css';
import { Navbar} from "../../containers"
import TaskDataService from "../../services/task.service";


 const Day = () => {
    
    const d = new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = weekDay[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [message, setMessage] = useState({ error: false, msg: ""});

    useEffect(() => {
      getTasks();
    }, []);

    const getTasks = async () => {
      const data = await TaskDataService.getAllTasks();
      setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      setMessage("");
      if(task === "") {
        setMessage({error: true, msg: "Task field is empty"});
        return;
      }
      const newTask = {
        task : task
      };


      try {
        await TaskDataService.addTasks(newTask);
        setMessage({error: false, msg : "New task added successfully"});
      } catch (err) {
        setMessage({error: true, msg: err.message});
        
      }
      getTasks();
      setTask("");
      console.log(message.msg);
    };

    const deleteHandler = async(id) => {
      await TaskDataService.deleteTask(id);
      getTasks();
    }

  return (
    <div className='page'>
      <Navbar />
      <div className="day">          
       <div className="day_comp">
          <h1 className='day_comp_title'>Task Completed</h1>
       </div>
       <div className='day_cont'>
         <div className='day_cont_top'>
        <h1 className='day_date'>{day}, {month} {date}</h1> 
         </div>
         <div className='day_cont_add'>
           <form  className='day_cont_add_form' onSubmit={handleSubmit}>
             <button className='day_cont_add_form_btn'><AiOutlinePlus/></button>
             <input 
              type="text" 
              placeholder='Add a Task' 
              className='input-el'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              />
           </form>

         </div>
         <div className='day_cont_task'>
    {tasks.map((doc, index)=> (
         <div className='tasks'>
          <p className='tasks_name'>
            {doc.task}  
          </p> 
          <button className='tasks_btn'><AiOutlineCheck size='1.5em' color='green'/></button>  
          <button className='tasks_btn' onClick={(e) => deleteHandler(doc.id)} ><AiOutlineClose size='1.5em' color='red'/></button>  
         </div> 
    ))}
        </div> 
       </div>
     </div>
    </div>
  
  );
}

export default Day;