// Base shape object
const shape = {
    calculateArea() {
        return 0; // default area
    }
};

// Rectangle object inheriting from shape
const rectangle = Object.create(shape);
rectangle.width = 7;
rectangle.height = 9;

// Override calculateArea for rectangle
rectangle.calculateArea = function() {
    return this.width * this.height;
};

// Circle object inheriting from shape
const circle = Object.create(shape);
circle.radius = 5;

// Override calculateArea for circle
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

// Testing
console.log("Rectangle area:", rectangle.calculateArea()); // Expected: 63
console.log("Circle area:", circle.calculateArea());       // Expected: ~78.5
console.log("Shape default area:", shape.calculateArea()); // Expected: 0
