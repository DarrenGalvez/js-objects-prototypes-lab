// Vehicle object literal
const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels`;
    }
};

// Create a car object that is inheriting from vehicle
const car = Object.create(vehicle);

// Add own properties to car
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;

// Call the describe method (inherited from vehicle)
console.log(car.describe()); // Expected: "This vehicle has 4 wheels"

// Check which properties belong directly to car
console.log(Object.hasOwn(car, 'make'));   // true
console.log(Object.hasOwn(car, 'model'));  // true
console.log(Object.hasOwn(car, 'year'));   // true
console.log(Object.hasOwn(car, 'wheels')); // false (inherited)

// Directly access inherited property
console.log(car.wheels); // 4
