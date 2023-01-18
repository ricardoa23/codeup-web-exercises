
const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 6},
        {name: "High School", rating: 8}
    ]
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 9},
        {name: "Middle School", rating: 9},
        {name: "High School", rating: 9}
    ]
}

console.log(whereToLive(neighborhood1)); // returns false due to school rating
console.log(whereToLive(neighborhood2)); // returns false due to crime rate
console.log(whereToLive(neighborhood3));// returns true
console.log(whereToLive(neighborhood4)); // returns false due to median home price




function whereToLive(potential) {
    let ratingTotal = 0;
    for(let i = 0; i < potential.schools.length; i++) {
        ratingTotal += potential.schools[i].rating;
    }
   return (potential.medianHomePrice < 300000 && potential.crimeRate === 'low' && ratingTotal <= 24) ? true : false;
}