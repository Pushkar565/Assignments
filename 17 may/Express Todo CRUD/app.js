const express = require('express');
const app = express();
const fs = require('fs');

// Middleware to parse JSON request bodies
app.use(express.json());

// Load data from db.json
const loadData = () => {
  try {
    const data = fs.readFileSync('db.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { todos: [] };
  }
};

// Save data to db.json
const saveData = (data) => {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
};

// Get all todos
app.get('/api/todos', (req, res) => {
  const data = loadData();
  res.json(data.todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const data = loadData();
  const newTodo = req.body;
  newTodo.id = data.todos.length + 1;
  data.todos.push(newTodo);
  saveData(data);
  res.json(newTodo);
});

// Update todos with even IDs to have status true
app.put('/api/todos/update-even', (req, res) => {
  const data = loadData();
  const updatedTodos = data.todos.map(todo => {
    if (todo.id % 2 === 0 && todo.status === false) {
      return { ...todo, status: true };
    }
    return todo;
  });
  data.todos = updatedTodos;
  saveData(data);
  res.json(updatedTodos);
});

// Delete todos with status true
app.delete('/api/todos/delete-completed', (req, res) => {
  const data = loadData();
  const updatedTodos = data.todos.filter(todo => todo.status !== true);
  data.todos = updatedTodos;
  saveData(data);
  res.json(updatedTodos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});