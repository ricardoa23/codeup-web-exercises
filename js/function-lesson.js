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

function isEven(num){
    //Get the pieces of the Puzzle!!!
    //Put the pieces of the puzzle into variables.
    let number = num;
    let answer = (number % 2 == 0);
    //finally return the answer
    return answer;
}
})();