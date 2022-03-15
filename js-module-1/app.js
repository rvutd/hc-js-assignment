const arr =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Task 3 -
// Finds Even Elements in array -
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        console.log("Even Numbers:", arr[i]);
    }
}

// Finds Odd Elements in array -
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
        console.log("Odd Numbers:", arr[i]);
    }

    // Another way of using js 
    // arr[i] % 2 != 0 ? console.log("Odd Numbers:", arr[i]) : null
}

// Find Prime Numbers in array -
var check;
const primeNumbers = []

for (let j = 0; j < arr.length-1; j++){
    check = true
    let num = arr[j]; 

    for (let i = 2; i < num-1; i++){
        if (num % i === 0){
            check = false
        }
    }

    // If Prime than add to Prime Numbers list -
    if (check === true && num > 2){
        primeNumbers.push(num)
    }
}

console.log("Prime Numbers", primeNumbers);

// 4. Provided the following  array:
// [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
// a. every element being twice of elements in the current list.
// b. every element being half of the elements in the current list.

const numList = [0, 2, 4, 6, 8, 10, 12, 14, 16]
const halfList = []
const twiceList = []

// a.
numList.forEach((num) => twiceList.push(num*2));
console.log("Twice List = ", twiceList);

// b. 
numList.forEach((num) => halfList.push(num/2));
console.log("Half List = ", halfList);


