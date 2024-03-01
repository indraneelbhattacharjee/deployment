import { Button } from "@mui/material";
import "./topBox.scss"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {topDealUsers} from "../data.ts"

const TopBox = () => {
  // Function to add an item to the database
  const addItemToDatabase = async (text) => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: text }) // You can replace 'Item to add' with actual data
      });
      const data = await response.json();
      console.log(data); // Log response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to remove an item from the database
  const removeItemFromDatabase = async (text) => {
    try {
      const response = await fetch('/api/dashboard:todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: text }) // You can replace 'Item to remove' with actual data
      });
      const data = await response.json();
      console.log(data); // Log response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
    <div className="topBox">
      <h1>To Do</h1>
      <textarea id="freeform" name="to-do-textbox" cols="40" rows="5">
        Enter your to-do list for your projects...
      </textarea>
      <br></br>
      <Button
        sx={{ width: 100, height: 35, mt: 2, fontSize: 10 }}
        color="error"
        name="Add Task"
        variant="contained"
        onClick={addItemToDatabase}
      >
        Add Task
      </Button>
      <Button
        sx={{ width: 100, height: 35, mt: 2, mx: 2, fontSize: 10 }}
        color="error"
        name="Delete Task"
        variant="contained"
        onClick={removeItemFromDatabase}
      >
        Delete Task
      </Button>
      {/**
      <div className="list">
      {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </div>
        */}
    </div>
  )
}

export default TopBox