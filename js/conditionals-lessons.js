let city = 'San Diego';
// if (city == 'Boston') {
//     console.log('hte city is Boston');
// } else if (city == 'San Antonio'){
//     console.log('The city is San Antonio')
// } else {
//     console.log(`${city}? Never heard of it`)
// }
//
// let pizzaPreference = prompt('What is your favorite pizza')
//
// if(pizzaPreference.toLowerCase == 'cheese') {
//     console.log('Thanks Kevin from home alone!');
// } else if (pizzaPreference == 'Pepperoni') {
//     console.log('I like that pizza type also');
// } else {
//     console.log("not my favorite but, I'll still eat it.");
// }
let success = false;
// let message;
// if (success) {
//     message = 'The Operation was successful';
// } else {
//     message = "The Operation was not successful";
// }

let message = (success) ? 'The operation is successful' : 'The operation is not successful';
console.log(message);

// switch(city) {
//     case 'San Antonio':
//         console.log('The city is San Antonio.');
//         break;
//     case 'Boston':
//         console.log('the city is Boston.');
//         break;
//     case 'El Paso':
//         console.log('The City is in El Paso.');
//         break;
//     case 'Los Angeles':
//         console.log('The city is LA.');
//         break;
//     default:
//         console.log("I'm not sure where that is!")
//         break;
//
// }
//determine if the variable is between 5 and 8
let number = 7;
switch(number){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('The number came before 5');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log('Tje number came between 5 and 8')
        break;
    default:
        console.log('The number came after 8')
        break;
}
let number2 = 1;

//Switch below has to much code so if/else below is better in this situation
if (number2 < 5) {
    console.log('The number came before 5');
} else if (number2 < 4 && number2 > 8) {
    console.log('The number is between 5 and 8');
} else {
    console.log('The Number came after 8');
}

// An example of a switch falling through
switch(number2) {
    case 1:
        console.log(`The number is ${number2}, but it will fall through case 1`);

    case 2:
        console.log(`The number is ${number2}, but it will fall through case 2`);

    case 3:
        console.log(`The number is ${number2}, but it will fall through case 3`);

    case 4:
        console.log('The number came before 5');
        break;
    case 5:
        console.log(`The number is ${number2}, but it will fall through case 5`);

    case 6:
        console.log(`The number is ${number2}, but it will fall through case 6`);

    case 7:
        console.log(`The number is ${number2}, but it will fall through case 7`);

    case 8:
        console.log('Tje number came between 5 and 8');
        break;
    default:
        console.log('The number came after 8');
        break;
}



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

let lastTodo = confirm('Would you like to enter a number?');
if (lastTodo) {
    let todoInput = prompt('Please enter your number below');
    todoInput = parseInt(todoInput);
    if (isNaN(todoInput) ) {
        alert("Please enter a number");
    } else {

        if (todoInput % 2 === 0) {
            alert(`${todoInput} is even.`);
            alert(`${todoInput} + 100 = ${ + 100}`);
        } else {
            alert(`${todoInput} is Odd.`);
            alert(`${todoInput} + 100 = ${todoInput + 100}`);

        }
        if (todoInput >= 0){
            alert(`${todoInput} is positive `);
        } else {
            alert(`${todoInput} is negative`);
        }
    }
} else {
    alert('Okay but if you change your mind all you have to do is refresh the page.');
}


// function isEven(num) {
//     return num % 2 === 0;
// }
//
// function add100(num) {
//     return num + 100;
// }
//
// function isPositive() {
//     return num > 0;
// }
