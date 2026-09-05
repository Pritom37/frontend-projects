const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");


// Load students
async function loadStudents() {

    const response = await fetch("/api/students");

    const students = await response.json();

    studentList.innerHTML = "";

    students.forEach(student => {

        const div = document.createElement("div");

        div.className = "student";

        div.innerHTML = `
            <strong>${student.name}</strong>
            <p>Age: ${student.age}</p>
            <p>Campus: ${student.campus}</p>

            <button
                class="delete"
                onclick="deleteStudent(${student.id})"
            >
                Delete
            </button>
        `;

        studentList.appendChild(div);
    });
}


// Add student
form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const campus = document.getElementById("campus").value;

    const response = await fetch("/api/students", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            age: Number(age),
            campus: campus
        })
    });

    const data = await response.json();

    console.log(data);

    form.reset();

    loadStudents();
});


// Delete student
async function deleteStudent(id) {

    await fetch(`/api/students/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}


// Initial load
loadStudents();