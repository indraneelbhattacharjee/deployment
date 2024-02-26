const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

// PostgreSQL database connection configuration
const pool = new Pool({
    user: 'postgres_user',
    host: 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com',
    database: 'technogaze',
    password: 'admin123',
    port: 5432, // Default PostgreSQL port
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
if (err) {
    console.error('Error connecting to the database:', err);
} else {
    console.log('Connected to the database');
    console.log('Current timestamp from the database:', res.rows[0].now);
}
});

// Create a dashboard table if it doesn't exist
pool.query(`
CREATE TABLE IF NOT EXISTS dashboard (
    todo TEXT NOT NULL
)
`, (err, res) => {
if (err) {
    console.error('Error creating dashboard table:', err);
} else {
    console.log('Dashboard table created or already exists');
}
});

// Function to insert a new task into the database (dashboard)
const insertTodo = async (text) => {
try {
    await pool.query('INSERT INTO dashboard (todo) VALUES ($1)', [text]);
    console.log('Todo inserted successfully');
} catch (err) {
    console.error('Error inserting todo:', err);
}
};

// Function to retrieve all todo items (dashboard)
const retrieveTodo = async () => {
try {
    const result = await pool.query('SELECT * FROM dashboard');
    const todos = result.rows;
    console.log('Retrieved todos:', todos);
} catch (err) {
    console.error('Error retrieving todos:', err);
}
};

// Function to remove a todo item by text
const removeTodo = async (text) => {
try {
    await pool.query('DELETE FROM dashboard WHERE todo = $1', [text]);
    console.log('Todo removed successfully');
} catch (err) {
    console.error('Error removing todo:', err);
}
};

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
