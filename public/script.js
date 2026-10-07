document.getElementById('studentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;
  const skills = document.getElementById('skills').value;

  const res = await fetch('/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, course, skills })
  });

  const result = await res.json();
  alert(result.message);
  loadStudents();
});

async function loadStudents() {
  const res = await fetch('/api/students');
  const students = await res.json();
  const list = document.getElementById('studentList');
  list.innerHTML = '';
  students.forEach((student) => {
    const li = document.createElement('li');
    li.textContent = `${student.name} | ${student.course} | ${student.skills}`;
    list.appendChild(li);
  });
}

window.onload = loadStudents;