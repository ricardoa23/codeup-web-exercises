(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName : 'Ricardo',
        lastName : 'Ayala'
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
      return `Hello ${this.firstName} ${this.lastName}!`
  }
    console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(shopper => {
        if (shopper.amount > 200) {
            console.log(`${shopper.name} You're getting a 12% discount on your $${shopper.amount.toFixed(2)} purchase, \nyour new total is ${(shopper.amount - (shopper.amount * 0.12)).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
        } else {
            console.log(`${shopper.name} You did not spend enough to receive a 12% you need to spend an additional ${(200 - shopper.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD'})} to receive a Discount.`)
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books = [];

createBooks('A Promised Land', 'Barack Obama');
createBooks('Raven One', 'Kevin Miller');
createBooks('Fight Fight', 'Kevin Miller');
createBooks('Magifamilia', 'Don Alejandro');
createBooks('No Easy Day', 'Mark Owen');
showBookInfo();
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach((book, index) => {
        console.log(`Book # ${index + 1}`)
        console.log(`Title: ${book.title}`)
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)

    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBooks(title, author) {
        let authorName = author.split(' ')
        let newBook = {
            title: title,
            author: {
                firstName: authorName[0],
                lastName: (authorName[1] === undefined) ? authorName[1] = '' : authorName[1] = authorName[1]
            }
        }
        books.push(newBook)
    }
    //below functions for prompting user to looks for book info and add book info to 'books'
    // TO DO update the function with a for each loop
    // function showBookInfo() {
    //
    //     let userInput = prompt("Please enter the book you'd like information on below");
    //     if (userInput !== null) {
    //         for (let i = 0; i < books.length; i++) {
    //             if (userInput.toLowerCase() === books[i].title.toLowerCase()) {
    //                 return alert(`Title: ${books[i].title} \nWritten by: ${books[i].author.firstName} ${books[i].author.lastName}`)
    //             }
    //         }
    //         let wouldYouLikeToAddOne = confirm(`We don't have any info on that book, Would you like to add it?`)
    //         if (wouldYouLikeToAddOne) {
    //             return createBooksInfo()
    //         } else {
    //             return alert('Okay Maybe next time')
    //         }
    //     } else {
    //         alert('Okay Maybe Next time')
    //     }
    // }
    // function createBooksInfo(title, author) {
    //     let inputTitle = prompt('Please enter the title of the book? ')
    //     let inputAuthor = prompt('Who wrote the book?')
    //     if (inputTitle && inputAuthor ) {
    //         return createBooks(inputTitle, inputAuthor);
    //     } else {
    //         alert('Okay maybe next time')
    //     }
    // }

})();




