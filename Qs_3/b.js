  // b) Use the ObjectisExtensible method to check if the student object is extensible. Store the result in a variable
// called extensibleStatus.
// isExtensible-> Returns a value that indicates whether new properties can be added to an object.
const student1 = {
    name: "John",
    age: 20
  };
  // Check if the student object is extensible
  const extensibleStatus = Object.isExtensible(student1);
  console.log(extensibleStatus);//Output will be true since the object is extensible by default
