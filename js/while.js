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
for (let i = conesToSell, j = Math.floor(Math.random() * 5) + 1; i > j && i < 99; i -= j) {
    console.log(i)
    console.log(j)
    j = Math.floor(Math.random() * 5) + 1;
    do {
        console.log(`You sold ${j}, you have ${i} cones left`);
        break;
    } while (i < j);
    if (conesToSell > conesSold) {
       do {
           console.log(`I can't sell you ${conesSold}, I only have ${conesToSell}.`);
           console.log(`You sold ${j}, you have ${i} cones left`);
            conesSold -= conesSold;
       } while (conesToSell > 0)
    }
    if  (i === 0) {
        console.log('You sold all your cones')
    }

}

// ways I broke it got it to count down to  50 but was unable to find way to continue the count below 50 without
//creating a continuous loop
//instructors Method

for (let i = 0, num = 2; i < 16; i++) {
    console.log(num);
    num *= 2;
}

// let conesToSell = allCones(50, 100);
//
// do {
//     let conesToBuy = allCones(1, 5);
//     if (conesToBuy <= conesToSell) {
//         console.log(`${conesToBuy} cones sold...`);
//         conesToSell -= conesToBuy; //conesToBuy = conesToSell - conesToBuy
//     }
//     else {
//         console.log(`I cannot sell you ${conesToBuy}, I only have ${conesToSell}...`);
//         console.log(`${conesToSell} cones sold...`);
//         conesToSell -= conesToSell
//     }
//     if (conesToSell === 0) {
//         console.log('Yay! I have sold them all!')
//         break;
//     }
// } while (conesToSell > 0)
