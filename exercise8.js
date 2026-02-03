// Base library object
const library = {
    name: 'Downtown Library',
    books: [],

    // Add a book to the library
    addBook(title, author, isbn) {
        const book = { title, author, isbn };
        this.books.push(book);
    },

    // Find a book by title
    findBookByTitle(title) {
        const found = this.books.find(book => book.title === title);
        return found || null;
    },

    // List all book titles
    listAllBooks() {
        console.log('Books in library:');
        this.books.forEach(book => console.log(book.title));
    },

    // Bonus: search books by author
    findBooksByAuthor: function(authorName) {
        return this.books.filter(book => book.author === authorName);
    }
};

// Create universityLibrary inheriting from library
const universityLibrary = Object.create(library);
universityLibrary.courses = [];

// Add a course book (adds both course and book)
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    if (!this.courses.includes(courseName)) {
        this.courses.push(courseName);
    }
    this.addBook(title, author, isbn);
};

// --- Testing ---

// Add books to library
library.addBook("Five Nights at Freddy's: The Silver Eyes", 'Scott Cawthon', '978-0596517748');
library.addBook('Ready Player One', 'Ernest Cline', '978-1593279509');
library.addBook('Diary of a Wimpy Kid', 'Jeff Kenny', '978-1491904244');

// Test listing all books
library.listAllBooks();

// Test finding a book by title
console.log(library.findBookByTitle('Ready Player One')); 
// Expected: { title: 'Ready Player One', 'Ernest Cline', '978-1593279509' }

// Test bonus: find books by author
console.log(library.findBooksByAuthor('Jeff Kenny')); 
// Expected: [{ title: 'Diary of a Wimpy Kid', 'Jeff Kenny', '978-1491904244' }]

// Add course books to universityLibrary
universityLibrary.addCourseBook('Computer Science', 'Introduction to Algorithms', 'Cormen', '978-0262033848');
universityLibrary.addCourseBook('Math', 'Linear Algebra Done Right', 'Sheldon Axler', '978-3319110790');
universityLibrary.addCourseBook('Computer Science', 'Structure and Interpretation of Computer Programs', 'Harold Abelson', '978-0262510875');

// Check universityLibrary books
universityLibrary.listAllBooks();

// Check universityLibrary courses
console.log('Courses:', universityLibrary.courses);
