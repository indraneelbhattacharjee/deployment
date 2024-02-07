import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

# Connect to SQLite database
conn = sqlite3.connect('users.db')
cursor = conn.cursor()

# Create a users table if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
''')
conn.commit()

# Function to insert a new user into the database (signup)
def insert_user(username, password):
    hashed_password = generate_password_hash(password, method='sha256')
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
    conn.commit()

# Function to check login credentials (login)
def check_credentials(username, password):
    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()

    if user and check_password_hash(user[2], password):
        return True
    else:
        return False

# Example: Signup a new user
insert_user('user1', 'password123')

# Example: Login (check credentials)
result = check_credentials('user1', 'password123')

if result:
    print('Login successful!')
else:
    print('Invalid login credentials.')

# Close the database connection
conn.close()
