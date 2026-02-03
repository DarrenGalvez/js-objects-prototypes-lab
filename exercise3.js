// Student object literal
const student = {
    firstName: 'Darren',
    lastName: 'Galvez',
    studentId: '2020151476',
    courses: [],

    // Method to return stuent's full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to enroll student in a course
    enrollCourse(courseName) {
        this.courses.push(courseName);
    },

    // Method to get the number of student's enrolled courses
    getCourseCount() {
        return this.courses.length;
    }
};

// Testing
console.log(student.getFullName()); // Expected: "Darren Galvez"

student.enrollCourse('CMPS2212');
student.enrollCourse('HIST1014');

console.log(student.getCourseCount()); // Expected: 2
console.log(student.courses);          // Optional: ["CMPS2212", "HIST1014"]
