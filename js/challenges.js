// ================================= WARM UP

// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];

// findAverageDogAge(pets) // returns 7.5
//
//
//
// function findAverageDogAge(pets) {
//     let totalAge = 0
//     let averageAge;
//     if (pets.type === 'Dog') {
//         for (let i = 0; i< pets.length; i++) {
//             pets[i].age = 0
//             totalAge += pets.age
//         }
//         return totalAge
//     }
// }
//
// console.log(findAverageDogAge(pets))








// ================================= WARM UP

// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

// console.log(returnLongestPetName(pets)); // returns 'Mr. Salmon'
function returnLongestPetName(input) {
    let longestPetName = ''
    input.forEach( (pet) => {
        if (pet.name.length > longestPetName.length) {
            longestPetName = pet.name
        }
    })
    return longestPetName;
}


function returnLastTwoChars(string) {
    return string.slice(-2);
}
// console.log(returnLastTwoChars('kitten'))


function returnLastCharsReversed(string, num) {
    if(num !== 0) {
        return string.slice(-num).split('').reverse().join('');
    } else {
        return '';
    }
}
// console.log(returnLastCharsReversed('candle', 4))