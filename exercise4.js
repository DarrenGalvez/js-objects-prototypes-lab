// Book object
const book = {
    title: "Five Nights at Freddy's: The Silver Eyes",
    author: 'Scott Cawthon',
    year: 2015,
    isbn: '978-0596517748'
};

// Function to display a property value
function displayProperty(obj, propertyName) {
    console.log(obj[propertyName]);
}

// Function to update a property value
function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}

// Testing the functions
displayProperty(book, 'title');  // Expected: "Five Nights at Freddy's: The Silver Eyes"

updateProperty(book, 'year', 2024);
displayProperty(book, 'year');   // Expected: 2024

// Additional tests
displayProperty(book, 'author'); // Expected: "Scott Cawthon"
updateProperty(book, 'isbn', '123-4567890123');
displayProperty(book, 'isbn');   // Expected: "123-4567890123"

// Non-existing property testing
displayProperty(book, 'publisher');  // Expected: "Property 'publisher' does not exist."
updateProperty(book, 'publisher', 'O\'John'); // Expected: "Update request failed. Property 'publisher' does not exist."
