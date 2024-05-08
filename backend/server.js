require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const serverless = require('serverless-http');
const auth = require('./middleware/auth');


const app = express();

// Database connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
console.log("CORS middleware configured.");

app.use(express.json());
console.log("Express JSON parser configured.");

app.use(cookieParser());
console.log("Cookie parser middleware configured.");

// Root route for simple server response
app.get('/', (req, res) => {
    console.log("Received request for root route.");
    res.send('Hello from the server!');
    console.log("Response sent for root route.");
});

// User registration
app.post('/post_register', async (req, res) => {
    console.log("Registration attempt:", req.body.email);
    const { username, email, password } = req.body;
    try {
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            console.log("Registration failed: User already exists.");
            return res.status(400).json({ message: 'User already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);

        console.log("User registered:", email);
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// User login
app.post('/post_login', async (req, res) => {
    console.log("Login attempt:", req.body.email);
    const { email, password } = req.body;
    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            console.log("Login failed: User not found.");
            return res.status(404).json({ message: 'User not found.' });
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            console.log("Login failed: Invalid password.");
            return res.status(400).json({ message: 'Invalid password.' });
        }

        const token = jwt.sign({ id: user.rows[0].id, email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000, sameSite: 'None', secure: true });
        console.log("Login successful:", email);
        res.status(200).json({ message: 'Logged in successfully.', token });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    console.log("Logout attempt.");
    res.clearCookie('jwt', { path: '/', sameSite: 'None', secure: true });
    console.log("Logout successful.");
    res.status(200).json({ message: 'Logged out successfully' });
});

// Route to insert a new task
app.post('/api/dashboard', async (req, res) => {
    console.log("Inserting todo:", req.body.todo);
    const { todo } = req.body;
    try {
        await pool.query('INSERT INTO dashboard (todo) VALUES ($1)', [todo]);
        console.log("Todo inserted successfully.");
        res.status(201).send('Todo inserted successfully');
    } catch (err) {
        console.error("Error inserting todo:", err);
        res.status(500).send('Error inserting todo');
    }
});

// Route to delete a task
app.delete('/api/dashboard/:todo', async (req, res) => {
    console.log("Deleting todo:", req.params.todo);
    const { todo } = req.params;
    try {
        const deleteResult = await pool.query('DELETE FROM dashboard WHERE todo = $1', [todo]);
        if (deleteResult.rowCount > 0) {
            console.log("Todo deleted successfully.");
            res.status(200).send('Todo removed successfully');
        } else {
            console.log("Todo not found.");
            res.status(404).send('Todo not found');
        }
    } catch (err) {
        console.error("Error removing todo:", err);
        res.status(500).send('Error removing todo');
    }
});

// Route to update a specific task
app.put('/api/dashboard/:todoId', async (req, res) => {
    console.log("Updating todo:", req.params.todoId);
    const { todoId } = req.params;
    const { updatedTodo } = req.body;
    try {
        const updateResult = await pool.query('UPDATE dashboard SET todo = $1 WHERE id = $2', [updatedTodo, todoId]);
        if (updateResult.rowCount > 0) {
            console.log("Todo updated successfully.");
            res.status(200).send('Todo updated successfully');
        } else {
            console.log("Todo not found.");
            res.status(404).send('Todo not found');
        }
    } catch (err) {
        console.error("Error updating todo:", err);
        res.status(500).send('Error updating todo');
    }
});

// Route to retrieve all tasks
app.get('/api/dashboard', async (req, res) => {
    console.log("Retrieving all todos.");
    try {
        const todos = await pool.query('SELECT * FROM dashboard');
        console.log("Todos retrieved successfully.");
        res.status(200).json(todos.rows);
    } catch (err) {
        console.error("Error retrieving todos:", err);
        res.status(500).json({ message: 'Error retrieving todos' });
    }
});

// Route to change user password
app.post('/api/users/change-password', auth, async (req, res) => {
    console.log("Changing password for user:", req.user.id);
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await pool.query('SELECT password FROM users WHERE id = $1', [req.user.id]);
        if (user.rows.length > 0) {
            const validPassword = await bcrypt.compare(oldPassword, user.rows[0].password);
            if (!validPassword) {
                console.log("Invalid old password.");
                return res.status(400).json({ message: 'Invalid old password' });
            }
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, req.user.id]);
            console.log("Password changed successfully.");
            res.status(200).json({ message: 'Password changed successfully' });
        } else {
            console.log("User not found.");
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error("Error changing password:", err);
        res.status(500).json({ message: 'Error changing password' });
    }
});

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
    console.error("Unhandled error detected: ", err);
    res.status(500).json({ message: "Internal server error" });
});

// Serverless handler export
module.exports = serverless(app);

/*const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello from Vercel!');
});

// Set the port to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});*/
