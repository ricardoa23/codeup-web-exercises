(function () {


// let message = myFunction('Ricardo');
// console.log(message)
let person1 = 'Billy',
    person2 = 'Bob'

fight(person1 , person2);

let x =isEven(24);
console.log(x)
let y = isEven(395843098570493);
console.log(y)
let iBreakThing = isEven(true);
console.log(iBreakThing)

let user;

function myFunction(name){
    return `Thank you ${name} you ran myFunction`;
}

function fight(person1, person2){
    console.log(`${person1} punched ${person2} right in the kisser.`);
}


})();
console.log('Below is the the isEven function')
console.log(isEven(24))
console.log('Below is the isOdd function')
console.log(isOdd(23))
console.log('Below is the identity function')
console.log(identity('test'))
console.log('Below is the isFive function')
console.log(isFive(5))
console.log('Below is the isMultipleOfFive')
console.log(isMultipleOfFive(25))


function isEven(num){
    //Get the pieces of the Puzzle!!!
    //Put the pieces of the puzzle into variables.
    let number = num;
    let answer = (number % 2 == 0);
    //finally return the answer
    return answer;
}
function isOdd(num) {
    return num % 2 !== 0;
};

function identity(input) {
    return input;
}
function isFive(num) {
    return num === 5;
}
function addFive(num) {
    return num + 5;
}
function isMultipleOfFive(num) {
    return num % 5 === 0;
}
function isThree(num) {
    return num === 3;
}