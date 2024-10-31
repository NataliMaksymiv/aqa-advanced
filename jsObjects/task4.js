const person = {
    firstName: "John",   
    lastName: "Smith",     
    age: 31            
  };
  
person.email = "john.smith@example.com"; 

delete person.age;  
  
console.log(person);
