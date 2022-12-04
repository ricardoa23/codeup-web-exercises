(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['Robert', 'Derek', 'Julian', 'Leo']
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0], names[1], names[2], names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(name => console.log(name))
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let numbers = [1, 2, 3, 4, 5, 6]
function firstItem() {
    return numbers[0]
    }
function secondItem() {

    return numbers[1]
}
    function lastItem() {
    return numbers[numbers.length -1]

    }
let item1 = firstItem();
let item2 = secondItem();
let finalItem = lastItem();


console.log(item1);
console.log(item2);
console.log(finalItem);



//     1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.

let food = ['apple',
    'pie',
    'sushi',
    'eggplant parmesan',
    'Uni',
    'Ravioli',
    'oysters',
    'ice Cream',
    'Pupusas',
    'Yakasoba'];// array of foods

let vowels = ['a', 'e', 'i', 'o', 'u']


// function findVowel() {
//
//     for (let i = 0; i < vowels.length; i++) {
//         console.log(vowels[i])
//         let singleVowel = vowels[i]
//         return singleVowel
//     }
// }
//
// findVowel()
//     console.log('---')
//
//     for (let i = 0, j = 0; i < food.length && j < 5; i++, j++) {
//         // console.log(food[i])
//         console.log(vowels[j])
//          if (food[i].startsWith(vowels[j])) {
//              console.log(food[i])
//     }
// }

//instructors method
for (let i = 0; i < food.length; i+= 1) {
    let firstChar = food[i][0];
    if (vowels.includes(firstChar)) {
        console.log(food[i]);
    }

}

//     2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.



//     3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
//     otherwise, the function should return the string ‘input num NOT in input array’


})();