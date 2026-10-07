const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// FIX 1: Tell the app to use Azure's dynamic port, or fall back to 3000 locally
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

let students = [];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.json({ message: 'Student added successfully!' });
});

// FIX 2: Remove the hardcoded "localhost" reference so it listens globally
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
