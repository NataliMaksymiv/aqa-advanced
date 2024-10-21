// Function declaration
function calculateArea(width, height) {
    return width * height;
};
console.log("Area using function declaration:", calculateArea(5, 10));

// Function expression
const calculateAreaExpression = function(width, height) {
    return width * height;
};
console.log("Area using function expression:", calculateAreaExpression(5, 10));

// Arrow function
const calculateAreaArrow = (width, height) => width * height;
console.log("Area using arrow function:", calculateAreaArrow(5, 10));
