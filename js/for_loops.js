function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
showMultiplicationTable(9);

for (let i = 20; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// for (let i = 1; i < 10; i++ ) {
//     console.log(i);
// }

for (let i = 100; i >= 1; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


