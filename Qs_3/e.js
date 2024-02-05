// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus. Create a new object called teacher
const teacher = {
    subject: "Math"
  };
  
  // Seal the teacher object
  Object.seal(teacher);
  
  // Check if the teacher object is sealed
  const sealedStatus = Object.isSealed(teacher);
  
  console.log(sealedStatus); // Output will be true since the object is sealed
  