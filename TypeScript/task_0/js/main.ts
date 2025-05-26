// Définition de l'interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Création des étudiants
const student1: Student = {
    firstName: "Wyatt",
    lastName: "Smith",
    age: 28,
    location: "Japon"
};

const student2: Student = {
    firstName: "Nolann",
    lastName: "Shai",
    age: 20,
    location: "Oklahoma City"
};

// Storing students in an array
const studentsList: Student[] = [student1, student2];

// Function to display students in an HTML table
function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const header = document.createElement("tr");

    header.innerHTML = "<th>First Name</th><th>Location</th>";
    table.appendChild(header);

    students.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

// Execute the function to display the students
renderTable(studentsList);
