const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const taskRoutes = require('./routes/tasks'); 
 
const app = express(); 
 
// Middleware 
app.use(cors()); 
app.use(express.json()); 
 
// Database Connection 
mongoose.connect('mongodb://localhost:27017/task-manager', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}) 
.then(() => console.log('Connected to MongoDB')) 
.catch(err => console.error('MongoDB connection error:', err)); 
 
// Routes 
app.use('/api/tasks', taskRoutes); 
 
// Start Server 
const PORT = 5000; 
app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`); 
}); 