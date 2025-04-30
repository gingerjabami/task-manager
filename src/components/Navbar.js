import React from "react"; 
import { Link } from "react-router-dom"; 
const Navbar = () => { 
return ( 
<nav className="navbar"> 
<h1>Task Manager</h1> 
<div className="links"> 
<Link to="/">Home</Link> 
<Link to="/add">Add Task</Link> 
</div> 
</nav> 
); 
}; 
export default Navbar; 