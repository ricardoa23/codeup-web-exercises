// let userInput = prompt('Please enter a odd number between 1 and 50')
//
// while (userInput > 50 || userInput < 1 || userInput % 2 === 0) {
//     userInput = prompt(`${userInput} is not a valid number please enter a number between 1-50 and odd.`);
//         break;
//     }
// if (userInput < 50 || userInput > 1 || userInput % 2 !== 0) {
//         console.log(`The number to skip is: ${userInput}`);
//     }
// for (let i = 1; i < 50; i++) {
//         if (i % 2 !== 0 && i != userInput) {
//             console.log(`Here is an odd number: ${i}`);
//         }
//         if (i == userInput) {
//             console.log(`Yikes! SKipping number: ${userInput}`);
//         }
//     }

//instructions Method

// while(true) {
//     let userNum = prompt('Enter an odd number between 1-50');
//     userNum = parseFloat(userNum);
//     if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1) {
//         for (let i = 1; i <= 50; i+= 2) {
//             if (i === userNum) {
//                 console.log(`Yikes! Skipping number: ${i}`);
//             } else {
//                 console.log(`Here is an odd number: ${i}`);
//             }
//         }
//         break;
//     }
// }