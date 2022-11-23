"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

let testColor = 'red'
console.log(analyzeColor(testColor.toLowerCase()))

function analyzeColor(string) {
    if (string == 'red') {
        return `I like the color ${string} too!`;
    } else if (string == 'blue') {
        return `${string} is another color I like!`;
    } else {
        return `I don't know what ${string} is. :(`;
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor.toLowerCase()))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//Ask why it didn't work with analyzeColor(randomColor.toLowerCase())

switch (randomColor){
    case 'green':
        console.log(`${randomColor} eggs and ham was one of the first books I read`);
        break;
    case 'red':
        console.log(`${randomColor} is a color that some sports cars look good in.`);
        break;
    case 'blue':
        console.log(`${randomColor} is the color of the ocean and sky`);
        break;
    case 'orange':
        console.log(`${randomColor} is my favorite color`);
        break;
    case 'yellow':
        console.log(`black and ${randomColor} reversed was a popular song`);
        break;
    case 'violet':
        console.log(`the new pokemon game ${randomColor}`);
        break;
    case 'indigo':
        console.log(`${randomColor} bunting is a small spieces of bird`);
        break;
    default:
        console.log(`I don't know what to really say about ${randomColor}`);
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let userInput = prompt("What's your favorite color?");
// switch (userInput.toLowerCase()) {
//     case 'red':
//         alert(`Not all fire engines are ${userInput.toLowerCase()}`);
//         break;
//     case 'blue':
//         alert(`the best shade of ${userInput.toLowerCase()} is Dodgerblue`);
//         break;
//     case 'orange':
//         alert(`${userInput.toLowerCase()} is my favorite color`);
//         break;
//     default:
//         alert(`${userInput.toLowerCase()} is something I'm not sure what to say about`);
//         break;
// }
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let luckyNumber = Math.floor((Math.random() * 5) + 1)
function calculateTotal(price) {
    switch (luckyNumber) {
        case 0:
            return priceBeforeDiscount;
            break;
        case 1:
            return price - (price * 0.1);
            break;
        case 2:
            return price - (price * 0.25);
            break;
        case 3:
            return price - (price * 0.35);
            break;
        case 4:
            return  price - (price * 0.5);
            break;
        case 5:
            return price * 0;
            break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */