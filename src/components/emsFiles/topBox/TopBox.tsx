import { Button } from "@mui/material";
import "./topBox.scss"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Todo {
  id: number;
  todo: string;
}

const TopBox = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addItemToDatabase = async (text: string): Promise<void> => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: text })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const removeItemFromDatabase = async (text: string): Promise<void> => {
    try {
      const response = await fetch('/api/dashboard:todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: text })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div className="topBox">
      <h1>To Do</h1>
      <textarea id="freeform" name="to-do-textbox" cols={40} rows={5}>
        Enter your to-do list for your projects...
      </textarea>
      <br />
      <Button sx={{ width: 100, height: 35, mt: 2, fontSize: 10 }}
        color="error" name="Add Task" variant="contained"
        onClick={() => addItemToDatabase("Example task")}>
        Add Task
      </Button>
      <Button sx={{ width: 100, height: 35, mt: 2, mx: 2, fontSize: 10 }}
        color="error" name="Delete Task" variant="contained"
        onClick={() => removeItemFromDatabase("Example task to remove")}>
        Delete Task
      </Button>
      <div className="list">
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
