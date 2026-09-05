const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const students = [];

// Student class
class Student {

    constructor(name, age, campus) {
        this.id = students.length + 1;
        this.name = name;
        this.age = age;
        this.campus = campus;
    }

    display() {
        return `${this.name} ${this.age} ${this.campus}`;
    }

    isEqual(other) {
        return (
            this.name === other.name &&
            this.age === other.age &&
            this.campus === other.campus
        );
    }
}

// Get all students
app.get("/api/students", (req, res) => {
    res.json(students);
});

// Add student
app.post("/api/students", (req, res) => {

    const { name, age, campus } = req.body;

    if (!name || !age || !campus) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newStudent = new Student(name, age, campus);

    students.push(newStudent);
    console.log(students);
    res.status(201).json(newStudent);
});

// Delete student
app.delete("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted"
    });
});

// Check equality
app.post("/api/students/equal", (req, res) => {

    const { student1, student2 } = req.body;

    const s1 = new Student(
        student1.name,
        student1.age,
        student1.campus
    );

    const s2 = new Student(
        student2.name,
        student2.age,
        student2.campus
    );

    res.json({
        equal: s1.isEqual(s2)
    });
}


);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});