// 3. Object Extensibility and Sealing

// DESCRIPTION: Object extensibility and sealing are two ways to prevent an object from being modified in JavaScript.
// Object extensibility refers to the ability to add new properties to an object. Objects are extensible by default, but you can use the Object.preventExtensions() method to make an object non-extensible. Once an object is non-extensible, you cannot add new properties to it.
// Object sealing goes a step further than object extensibility by also preventing you from changing existing properties on an object. You can use the Object.seal() method to seal an object. Once an object is sealed, you cannot add new properties to it, delete existing properties, or change the values of existing properties.

// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
const student = {
    name: "John",
    age: 20
 };
  // Prevent further additions of properties to the student object
  Object.preventExtensions(student);
  // Try to add a new property
  student.grade = "A"; 
  // Verify if the property was added
  console.log(student.grade); // Output: undefined
  // Attempt to add a property using Object.defineProperty
  Object.defineProperty(student, "grade", { value: "A" });//TypeError:Cannot define property grade,object is not extensible
