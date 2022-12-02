//
// let i = 2
// let powerOf = 1
// while(i <= 65536 && powerOf <= 16) {
//     console.log(i ** powerOf);
//     powerOf++;
// }

function allCones(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// let conesSold = Math.floor(Math.random() * 5) + 1;
for (let i = allCones(1, 100), j = Math.floor(Math.random() * 5) + 1; i > 49 && i < 99; i -= j) {
    console.log(i)
    console.log(j)
    j = Math.floor(Math.random() * 5) + 1;
    do {
        console.log(`You sold ${j}, you have ${i} cones left`);
        break;
    } while (i < j);
    while (i <= 50 && i >= 1) {
        console.log('test')
    }
    // i = allCones(-1, 5)
    // do {
    //     console.log(`You sold all the cones!`)
    // } while (i === 0);
}

// ways I broke it got it to count down to  50 but was unable to find way to continue the count below 50 without
//creating a continuous loop
