// Person object
const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

// Employee object inheriting from person
const employee = Object.create(person);
employee.company = 'Simple Solutions LLC';
employee.position = 'Developer';

// Manager object inheriting from employee
const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

// Method to add team members
manager.addTeamMember = function(name) {
    this.team.push(name);
};

// Demonstration of prototype chain

// Access properties from manager itself
console.log(manager.department); // "Engineering"
console.log(manager.team);       // []

// Manager method
manager.addTeamMember('Giselle');
manager.addTeamMember('Kevin');
console.log(manager.team);       // ["Giselle", "Kevin"]

// Access properties from employee (inherited)
console.log(manager.company);    // "Simple Solutions LLC"
console.log(manager.position);   // "Developer"

// Access properties from person (inherited)
console.log(manager.species);    // "Human"
console.log(manager.breathe());  // "Breathing..."

// Testing check for own properties vs inherited
console.log(Object.hasOwn(manager, 'department')); // true
console.log(Object.hasOwn(manager, 'company'));    // false
console.log(Object.hasOwn(manager, 'species'));    // false
