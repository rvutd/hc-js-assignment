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
