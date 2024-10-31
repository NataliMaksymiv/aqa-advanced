const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2015
  };
  
const car2 = {
    brand: "Nissan",
    model: "Leaf",
    owner: 2020
  };
  
const car3 = { ...car1, ...car2 };
  
console.log(car3);
