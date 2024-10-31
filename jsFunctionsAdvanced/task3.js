function divide(numerator, denominator) {

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new Error("Both numerator and denominator must be numbers.");
    }
    
    if (denominator === 0) {
      throw new Error("Denominator cannot be 0.");
    }
    return numerator / denominator;
  }
  
  const testCases = [
    { num: 10, den: 2 },  // valid case
    { num: 10, den: 0 },  // denominator is 0
    { num: 10, den: 'a' }, // invalid denominator
    { num: '10', den: 2 }, // invalid numerator
    { num: 5, den: 1 }    // valid case
  ];
  
  // Loop through test cases and handle each one
  testCases.forEach(({ num, den }) => {
    try {
      const result = divide(num, den);
      console.log(`Result of ${num} / ${den} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      console.log("Operation complete");
    }
  });