function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
showMultiplicationTable(9);
//
//
//
// My code below (didn't add any code to generate number)

function randomNumber(max, min) {
   let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
for (let i = 0; i < 10; i++) {
    let number = randomNumber(200, 20);
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is false`);
    }
}


for (let i = 100; i >= 1; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
