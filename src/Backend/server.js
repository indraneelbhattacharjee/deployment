const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const cors = require('cors')
const app = express();
const PORT = 8080;

const usersFilePath = path.join(__dirname, 'dummy_db.json');

app.use(bodyParser.json());
app.use(cors());

function readUsersFromFile() {
  if (!fs.existsSync(usersFilePath)) {
    return [];
  }
  const usersData = fs.readFileSync(usersFilePath);
  return JSON.parse(usersData);
}

function writeUsersToFile(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

app.post('/post_register', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    return res.status(400).send({ success: false, message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  writeUsersToFile(users);
  res.send({ success: true, message: 'User registered successfully' });
});

app.post('/post_login', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();
  const user = users.find(user => user.email === email);

  if (user && await bcrypt.compare(password, user.password)) {
    return res.send({ success: true, message: 'User authenticated successfully' });
  } else {
    return res.status(400).send({ success: false, message: 'Invalid email or password' });
  }
});
app. listen (7000, ()=> console. log("server start"))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
