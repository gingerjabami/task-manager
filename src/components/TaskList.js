import React, { useState, useEffect } from "react"; 
const TaskList = () => { 
const [tasks, setTasks] = useState([]); 
useEffect(() => { 
    const fetchTasks = async () => { 
      try { 
        const response = await fetch('http://localhost:5000/api/tasks'); 
        const data = await response.json(); 
        setTasks(data); 
      } catch (err) { 
        console.error('Error fetching tasks:', err); 
      } 
    }; 
    fetchTasks(); 
  }, []); 
return ( 
<div className="task-list"> 
<h2>Tasks</h2> 
{tasks.map((task) => ( 
<div key={task.id} className="task"> 
<h3>{task.title}</h3> 
<p>{task.completed ? " ✅ Done" : " ❌ Pending"}</p> 
</div> 
))} 
</div> 
); 
}; 
export default TaskList;