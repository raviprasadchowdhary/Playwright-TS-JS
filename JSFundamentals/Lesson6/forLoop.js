// for loop
/*
    for (statement1; statement2; statement3) {
    // code block to be executed
    }
    statement1: executed (one time) before the execution of the code block
    statement2: defines the condition for executing the code block
    statement3: executed (every time) after the code block has been executed
*/

console.log(`Example 1: Print numbers from 0 to 4`)
for (let i=0; i<5; i++){
    console.log(i)
}

console.log(`Example 2: Print even numbers from 0 to 10`)
for (let i=0; i<=10; i+=2){
    console.log(i)
}

console.log(`Example 3: Print numbers from 5 to 1`)
for (let i=5; i>=1; i--){
    console.log(i)
}

console.log(`Example 4: iterate through an array and print each element`)
let fruits = ['apple', 'banana', 'cherry', 'date']

console.log(`Using traditional for loop`)
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

console.log(`Using for...of loop`)
for (let fruit of fruits){
    console.log(fruit)
}

console.log(`Using ES6 for...of loop with arrow function`)
fruits.forEach(fruit => {
    console.log(fruit)
})