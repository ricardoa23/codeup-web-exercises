const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Exercise 2
let moreThanThreeLang = (input) => input.languages.length >= 3;

let newUserArr = (input) => input.filter(moreThanThreeLang);

console.log(newUserArr(users));

// Exercise 3

let userEmails = users.map((user) => {return user.email})
console.log(userEmails);

// Exercise 4

let totalYears = users.reduce((accum, currentValue) => {
    return accum += currentValue.yearsOfExperience
}, 0)

console.log(totalYears);

// Exercise 5

let longestEmail = users.reduce((accum, currentValue) => {
  return  (accum.length < currentValue.email.length) ? currentValue.email : accum;
}, ' ')

console.log(longestEmail);

// Exercise 6

let instructors = users.reduce((accum, currentValue) => {
    accum += ' ' + currentValue.name + ','
    currentValue = accum
    return currentValue.replace('justin,', 'justin.')

   
}, `Your instructors are:`)
console.log(instructors);


//Bonus

let uniqueLang = users.reduce