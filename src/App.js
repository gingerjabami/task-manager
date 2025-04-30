import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import TaskList from "./components/TaskList"; 
import TaskForm from "./components/TaskForm"; 
import "./App.css"; 
function App() { 
return ( 
<Router> 
<div className="App"> 
<Navbar /> 
<Routes> 
<Route path="/" element={<TaskList />} /> 
<Route path="/add" element={<TaskForm />} /> 
</Routes> 
</div> 
</Router> 
); 
} 
export default App;