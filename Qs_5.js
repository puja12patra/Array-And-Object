// 5. You are given a JavaScript object representing a student's information. Your task is to use the ‘for...in' loop
// to iterate over the properties of the object and perform various operations.

// a. Create a function displayStudentinfo that takes the student object as a parameter. Inside this function, use a
// ‘for..in’ loop to iterate over the properties of the student object and print each property and its corresponding
// value to the console. 


function displayStudentInfo(student)
{
    for (let property in student) 
    {
        console.log(`Property of student Object: ${property}, Value of ${property} is: ${student[property]}`);
    }
}
const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science',
    GPA: 3.8,
    isEnrolled: true
};

displayStudentInfo(student);

//OUTPUT:
// Property of student Object: name, Value of name is: Alice
// Property of student Object: age, Value of age is: 22
// Property of student Object: major, Value of major is: Computer Science
// Property of student Object: GPA, Value of GPA is: 3.8
// Property of student Object: isEnrolled, Value of isEnrolled is: true
