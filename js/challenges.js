// ================================= WARM UP

// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

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
        name: 'Pickles',
        type: 'Dog',
        age: 10
    }

];

findAverageDogAge(pets) // returns 7.5



function findAverageDogAge(pets) {
    let totalAge = 0
    let averageAge;
    if (pets.type === 'Dog') {
        for (let i = 0; i< pets.length; i++) {
            pets[i].age = 0
            totalAge += pets.age
        }
        return totalAge
    }
}

console.log(findAverageDogAge(pets))