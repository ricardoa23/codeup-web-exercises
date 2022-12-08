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


//Fibonacci exercise

let n1 = 1, n2 = 2, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i < 50; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }


//Additional practice



let testNums = [3,3];
let testTarget = 6;

// let twoSum = function(nums, target) {
//     for (let i = nums.length; i >= 0; i--) {
//         let individualNumber = nums[i]
//         let individualNumber2 = nums[i - 1]
//         if (individualNumber +  individualNumber2 === target) {
//            let number = [];
//            if (number[1] === 0) {
//                number.push(nums[i])
//
//            } else {
//                return number;
//            }
//         }
//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 3], 6))

const twoSum = (nums, target) => {
    let newArr = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
}

console.log(twoSum(testNums, testTarget));