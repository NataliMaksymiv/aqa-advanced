
let number = 7; 

console.log("Multiplication Table using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("Multiplication Table using while loop:");
let j = 1;
while (j <= 10) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
}