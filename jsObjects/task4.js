const person = {
    firstName: "John",   
    lastName: "Smitn",     
    age: 31            
  };
  
person.email = "john.smith@example.com"; 

delete person.age;  
  
console.log(person);
