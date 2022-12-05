let i = 2
let powerOf = 1
while(powerOf <= 16) {
    console.log(i ** powerOf);
    powerOf++;
}

function allCones(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let conesToSell = allCones(50, 100)
let conesSold = Math.floor(Math.random() * 5) + 1;

do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesToSell >= conesSold || conesToSell < 0) {
        conesToSell -= conesSold;
        console.log(`You sold ${conesSold} you have ${conesToSell} left!`);
    }
    if (conesToSell === 0) {
        console.log('You sold them all go home!')
    }
    if (conesToSell <= conesSold && conesToSell !== 0){
        conesSold = conesToSell
        conesToSell -= conesSold
        console.log(`You sold the last ${(conesSold === 1) ? 'cone' : `${conesSold} cones`} go home!!!`)
    }
} while (conesToSell >= conesSold)


