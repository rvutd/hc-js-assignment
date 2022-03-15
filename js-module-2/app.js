// Task3 - Filter out odd, even, and prime numbers and print them
const task3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Task: 3");

// Using Filter
const oddFilter = task3.filter(value => {
    if (value % 2 != 0 && value > 0){
        return value
    }
})

const evenFilter = task3.filter(value => {
    if (value % 2 === 0 && value > 0){
        return value
    }
})

// Checks If num is prime or not -
const ifPrime = value => {
    for(let i = 2; i < value; i++){
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1
}
const primeFilter = task3.filter(ifPrime);

console.log("Odd by Filter", oddFilter);
console.log("Even by Filter", evenFilter);
console.log("Prime by Filter", primeFilter);

// 4. Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.

const task4 = [0, 2, 4, 6, 8, 10, 12, 14, 16]
console.log("Task 4 list:", task4);


// task a - twice
const twiceNum = task4.map(value => {
    value = value * 2;
    return value
})

console.log("twice of each number: ", twiceNum);

// Task b - Half of every element
const halfNum = task4.map(value => value/2)
console.log("Half Num:", halfNum);


