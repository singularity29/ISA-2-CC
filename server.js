const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});