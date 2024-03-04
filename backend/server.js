const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 4000;

// PostgreSQL database connection configuration
const pool = new Pool({
    user: 'postgres_user',
    host: 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com',
    database: 'technogaze',
    password: 'admin123',
    port: 5432, // Default PostgreSQL port
    ssl: {
        rejectUnauthorized: false // For SSL connections, if enabled
    }
});

// Test the database connection
pool.connect()
    .then(() => {
        console.log('Connected to the database');
        pool.query('SELECT NOW()', (err, res) => {
            if (err) {
                console.error('Error running query', err);
            } else {
                console.log('Current timestamp from the database:', res.rows[0].now);
            }
        });
    })
    .catch(err => console.error('Error connecting to the database:', err));

// Create a dashboard table if it doesn't exist
pool.query(`
    CREATE TABLE IF NOT EXISTS dashboard (
        todo TEXT NOT NULL
    )`
    , (err, res) => {
        if (err) {
            console.error('Error creating dashboard table:', err);
        } else {
            console.log('Dashboard table created or already exists');
        }
    });

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler to insert a new task into the database (dashboard)
app.post('/api/dashboard', async (req, res) => {
    const { todo } = req.body;
    try {
        await pool.query('INSERT INTO dashboard (todo) VALUES ($1)', [todo]);
        console.log('Todo inserted successfully');
        res.status(201).send('Todo inserted successfully');
    } catch (err) {
        console.error('Error inserting todo:', err);
        res.status(500).send('Error inserting todo');
    }
});

// Route handler to remove a todo item by text
app.delete('/api/dashboard/:todo', async (req, res) => {
    const { todo } = req.params;
    try {
        await pool.query('DELETE FROM dashboard WHERE todo = $1', [todo]);
        console.log('Todo removed successfully');
        res.send('Todo removed successfully');
    } catch (err) {
        console.error('Error removing todo:', err);
        res.status(500).send('Error removing todo');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});