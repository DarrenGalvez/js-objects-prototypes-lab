// Array of numbers
const numbers = [2, 4, 5, 8, 10];

// Square each number using map
const squared = numbers.map(num => num * num);

// Get only even numbers using filter
const evens = numbers.filter(num => num % 2 === 0);

// Sum all numbers using reduce
const sum = numbers.reduce((total, num) => total + num, 0);

// Output results
console.log("Squared:", squared);        // Expected: [4, 16, 25, 64, 100]
console.log("Even numbers:", evens);     // Expected: [2, 4, 8, 10]
console.log("Sum:", sum);                // Expected: 29
