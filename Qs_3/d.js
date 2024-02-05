// d) Use the Objectseal method to seal the teacher object, preventing any additions or deletions of properties.
// Create a new object called teacher
//we can use the Object.seal() method to seal the teacher object, preventing any additions or deletions of properties

const teacher = {
    subject: "Math"
  };
  
  // Seal the teacher object
  Object.seal(teacher);
  
  // Try to add a new property
  teacher.grade = "A"; // This operation will not throw an error, but it won't add the property
  
  // Try to delete the subject property
  delete teacher.subject; // This operation will not throw an error, but it won't delete the property
  
  console.log(teacher); // Output: { subject: "Math" }
  