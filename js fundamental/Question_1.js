var student={
    name : "Dhan Bahadur",
    sclass : 9,
    rollno: 1
  }
  
  console.log(Object.getOwnPropertyNames(student));
  
 console.log("before deleting the property:");
  console.log(student);
  delete student.rollno;
  console.log("after deleting the property:");
  console.log(student);
  var size = Object.keys(student).length;
  console.log(size);