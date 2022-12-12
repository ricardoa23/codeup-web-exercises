(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
let sun = planets.unshift('Sun')
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(sun);

let pluto = planets.push('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(pluto);

let shift = planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(shift);

let pop = planets.pop()
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(pop);
let indexOf = planets.indexOf('Earth')
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(indexOf)

let reverse = planets.reverse()
    console.log("Reversing the order of the planets array.");
    console.log(reverse);

let sort = planets.sort()
    console.log("Sorting the planets array.");
    console.log(sort);
})();