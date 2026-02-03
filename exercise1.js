//Exercise 1
function calculateArea(length, width) {
    return length * width;
}

// Function Testing
console.log(calculateArea(90, 34)); // Expected: 3060
console.log(calculateArea(8, 72));  // Expected: 576
console.log(calculateArea(46, 5));  // Expected: 230

//Exercise 2
const calculatePerimeter = function(length, width) {
    return 2 * length + 2 * width;
};

// Function Testing
console.log(calculatePerimeter(5, 7)); // Expected: 35
console.log(calculatePerimeter(10, 6));  // Expected: 60
console.log(calculatePerimeter(8, 9));  // Expected: 72
