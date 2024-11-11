function handleNum(number, handleEven, handleOdd) {
	if (number % 2 === 0) {
		handleEven();
	} else {
		handleOdd();
	}
}

// Callback function for even numbers
function handleEven() {
	console.log('Number is even');
}

// Callback function for odd numbers
function handleOdd() {
	console.log('Number is odd');
}

handleNum(10, handleEven, handleOdd); // Output: "number is even"
handleNum(7, handleEven, handleOdd); // Output: "number is odd"
