const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 8080;

// CORS configuration: Allow requests from the frontend running on localhost:3000
// You can customize the cors options as per your requirements
app.use(cors({
    origin: 'http://localhost:3000'
  }));

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

//Users
pool.query(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`
, (err, res) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('Dashboard table created or already exists');
    }
});

const bcrypt = require('bcrypt');

// Route handler for user registration
app.post('/post_register', async (req, res) => {

    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const userExist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExist.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user, including the username
        await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', 
                         [username, email, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

/*
// Route to get all users
app.get('/api/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users'); // Adjust SQL query as needed
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
    }
  });
*/

// Route handler for user login
app.post('/post_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user by email
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length == 0) {
            return res.status(400).json({ message :'User not found.' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Login successful - For simplicity, just sending a success message.
        // Implement JWT or session-based authentication as needed.
        res.send('Logged in successfully.');
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).send('Error logging in');
    }
});
