const users = [
    { name: "Mary", email: "mary@example.com", age: 9 },
    { name: "Marko", email: "marko@example.com", age: 11 },
    { name: "Roman", email: "roman@example.com", age: 14 }
  ];
  
for (const user of users) {
   const { name, email, age } = user;
   console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
 }