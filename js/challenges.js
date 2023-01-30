// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };

// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }

// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }

// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }

// console.log(whereToLive(neighborhood1)); // returns false due to school rating
// console.log(whereToLive(neighborhood2)); // returns false due to crime rate
// console.log(whereToLive(neighborhood3));// returns true
// console.log(whereToLive(neighborhood4)); // returns false due to median home price

// function whereToLive(potential) {
//     let ratingTotal = 0;
//     for(let i = 0; i < potential.schools.length; i++) {
//         ratingTotal += potential.schools[i].rating;
//     }
//    return (potential.medianHomePrice < 300000 && potential.crimeRate === 'low' && ratingTotal <= 24) ? true : false;
// }

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// console.log(encodeStr("apple")); // returns ‘@pple’
// console.log(encodeStr("Apple")); // returns ‘@pple’
// console.log(encodeStr("codeup")); // returns ‘codeup’
// console.log(encodeStr("SASS")); // returns ‘$@$$’
// console.log(encodeStr("bike")); // returns ‘b1ke’
// console.log(encodeStr("Bike")); // returns ‘B1ke’

// // function encodeStr(input) {
// //   return input
// //     .replaceAll("A", "@")
// //     .replaceAll("a", "@")
// //     .replaceAll("I", "1")
// //     .replaceAll("i", "1")
// //     .replaceAll("S", "$")
// //     .replaceAll("s", "$");
// // }

// function encodeStr (input){
//     return input
//         .replace(/a/gi, "@" )
//         .replace(/S/gi, "$")
//         .replace(/i/gi, "1");
// }

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.


// let strs = [
// 	{
// 		id: 1,
// 		str: 'hello'
// 	},
// 	{
// 		id: 2,
// 		str: 'world'
// 	},
// 	{
// 		id: 3,
// 		str: 'codeup'
// 	},
// 	{
// 		id: 4,
// 		str: 'x'
// 	}
// ]

// console.log(reverseStrings(strs)) // returns...

// [
// 	{
// 		id: 1,
// 		str: 'olleh'
// 	},
// 	{
// 		id: 2,
// 		str: 'dlrow'
// 	},
// 	{
// 		id: 3,
// 		str: 'puedoc'
// 	},
// 	{
// 		id: 4,
// 		str: 'x'
// 	}
// ]


// function reverseStrings(strings) {
//     strings.forEach(string => {
//          string.str = string.str.split('').reverse().join('')
//         });
//         return strings;
// }


let num1 = [1, 3, 5, 9, 9];
let num2 = [9, 9, 9, 18];

let isNine = (num) => num !== 9;

let remove9s = (input) =>  input.filter(isNine);
console.log(remove9s(num1));
console.log(remove9s(num2));
