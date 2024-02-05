// 4. Assignment: Building a Student Management System
// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.
// Implement the following functions using pure JavaScript (without any external libraries or frameworks):
// a. Add a Student: Create a function to add a new student to the array.

// b, Update Student Information: Create a function to update a student's information based on their id.

// c. Delete a Student: Create a function to delete a student based on their id.

// d. List All Students: Create a function to display a list of all students.

// e. Find Students by Grade: Create a function to find all students who have a specific grade.

// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.

let students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 21, grade: "B" },
    { id: 3, firstName: "Alice", lastName: "Johnson", age: 19, grade: "C" }
];



//a)****** Function to add a new student *********
function addStudent(newStudent) 
{
    students.push(newStudent);
}
addStudent({ id: 4, firstName: "Emily", lastName: "Davis", age: 22, grade: "B" });
console.log("After adding a new student the student record will be:");
displayStudents();
//OUTPUT:
// After adding a new student the student record will be:
// List of students:
// 1: John Doe, Age: 20, Grade: A
// 2: Jane Smith, Age: 21, Grade: B
// 3: Alice Johnson, Age: 19, Grade: C
// 4: Emily Davis, Age: 22, Grade: B


//b)******** Function to update student information *******
function updateStudent(id, updatedInfo) 
{
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    } else {
        console.log("Student not found!");
    }
}
updateStudent(3, { age: 20, grade: "A" });
console.log("After updating student information:");
displayStudents();
//OUPUT:
// After updating student information:
// List of students:
// 1: John Doe, Age: 20, Grade: A
// 2: Jane Smith, Age: 21, Grade: B
// 3: Alice Johnson, Age: 20, Grade: A
// 4: Emily Davis, Age: 22, Grade: B


//c)*********** Function to delete a student ***********
function deleteStudent(id) 
{
    students = students.filter(student => student.id !== id);
}
deleteStudent(2);
console.log("After deleting a student:");
displayStudents();
//OUTPUT:
// After deleting a student:
// List of students:
// 1: John Doe, Age: 20, Grade: A
// 3: Alice Johnson, Age: 20, Grade: A
// 4: Emily Davis, Age: 22, Grade: B



//d)******** Function to display all students *******
function displayStudents() 
{
    console.log("List of students:");
    students.forEach(student => 
    {
        console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}
displayStudents();
//OUTPUT: 
// List of students:
// 1: John Doe, Age: 20, Grade: A
// 3: Alice Johnson, Age: 20, Grade: A
// 4: Emily Davis, Age: 22, Grade: B



//e)******* Function to find students by grade*******
function findStudentsByGrade(grade) 
{
    return students.filter(student => student.grade === grade);
}
let gradeBStudents = findStudentsByGrade("B");
console.log("Students with grade B:");
console.log(gradeBStudents);
//OUTPUT:
//Students with grade B: 
// [
//     { id: 4, firstName: 'Emily', lastName: 'Davis', age: 22, grade: 'B' }
// ]


//f)********Function to calculate Average Age*********

function calculateAverageAge() 
{
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}
const averageAge = calculateAverageAge();
console.log("Average age of all students:", averageAge);//OUTPUT: Average age of all students: 20.666666666666668
