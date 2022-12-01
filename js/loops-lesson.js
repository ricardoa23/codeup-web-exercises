// While loop
let iteration = 0;
while (iteration < 10) {
    console.log(`While loop #${iteration + 1}`);
    iteration++;
}

//Do while is pretty much the same as a while loop
iteration = 0;
do {
    console.log(`Do-While Loop #${iteration + 1}`);
    iteration++;
} while (iteration < 10)
// For loops are a similar while loops, but it's a safe version
for (let i = 0; i < 10; i++) {
    console.log(`For loop #${i +1}`);
}
// for loops below counts down
for (let i = 10; i > 0; i--) {
    console.log(`For Loop #${i}`)
}

let array = ['oranges', 'apples', 'pineapples', 'pears', 'grapes', 'tomatoes'];
// for (let i = 0; i < array.length; i++) {
//     console.log(`${array[i]} are Awesome!`)
// }
//
for (let i = 0; i < array.length; i++) {
    if (array[i] === 'tomatoes') {
        console.log(`Wait... ${array[i]} are a fruit?!!!`)
    } else {
        fruitMessage(array[i])
    }
}

function fruitMessage(input) {
    console.log(`${input} are Awesome!`)
}