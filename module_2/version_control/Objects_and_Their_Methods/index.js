// Nested Objects and Traversal
// Create an object library that represents a library catalog. The object should have the following structure:

// name (string): Name of the library.
// location (string): Location of the library.
// books (array of objects): Each object in the array represents a book with the following properties:
// title (string)
// author (string)
// available (boolean)
// Perform the following tasks:

// Add at least 3 books to the books array.
// Use a loop to iterate through the books array and display the title and author of all available books.
// Add a method findBook to the library object that takes a book title as input and returns the corresponding
// book object.
// Test the findBook method by passing a title of a book that exists in the catalog.


let library = {
    name:'casey',
    location:'San Francisco',
    books: [{name:'mid term',author:'carpen',availability:false}]
}

library['books'].push({name:'mid sem',author:'carpen',availability:false});
library['books'].push({name:'first sem',author:'larpen',availability:true});
library['books'].push({name:'last sem',author:'barpen',availability:true});

for(let key of Object.keys(library))
    if(key=='books')
        for(let i = 0 ; i < library[key].length ; i++)
           if(library[key][i]['availability'])
              console.log("name"+" : "+library[key][i]['name']+" , "+"author"+" : "+library[key][i]['author']);

function findBook(bookName){
    for(let key of Object.keys(library))
        if(key=='books')
            for(let i = 0 ; i < library[key].length ; i++)
               if(library[key][i]['name']==bookName)
                  return library[key][i];
}

console.log(findBook('first sem'));

let employee = {
    firstName : 'Cathy',
    lastName : 'Turp',
    hourlyWage : 250,
    hoursWorked : 30,
    calculateSalary : function() { return this.hourlyWage*this.hoursWorked; }
}
console.log(employee.calculateSalary())

let rectangle = {
    length : 200,
    breadth : 30,
    calculateArea : function() { return this.length*this.breadth; },
    calculatePerimeter : function() { return 2*(this.length+this.breadth); }
}
console.log(rectangle.calculateArea())
console.log(rectangle.calculatePerimeter())

let books = {name:'terms',author:'sharpen',year: 1990,genres: ['action','thriller']}
for(let key in books)
    console.log(key+" : "+books[key])