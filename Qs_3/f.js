// f) Print the extensibleStatus and sealedStatus to the console.

// Define the student object
const student = {
    name: "John",
    age: 20
  };
  
  // Check if the student object is extensible
  const extensibleStatus = Object.isExtensible(student);
  
  // Create a new object called teacher
  const teacher = {
    subject: "Math"
  };
  
  // Seal the teacher object
  Object.seal(teacher);
  
  // Check if the teacher object is sealed
  const sealedStatus = Object.isSealed(teacher);
  
  // Print extensibleStatus and sealedStatus to the console
  console.log("Extensible Status of student Object:", extensibleStatus); //True
  console.log("Sealed Status of teacher Object:", sealedStatus); //True
  