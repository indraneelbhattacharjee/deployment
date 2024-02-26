import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    //this references the function in backenc/server.js file
    axios.get('/api/dashboard')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
