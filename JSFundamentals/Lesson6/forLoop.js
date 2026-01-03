// loops

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

// while loop
/*
    while (condition) {
    // code block to be executed
    }
    // The code block inside the loop will be executed as long as the condition is true.
    // If the condition is false at the beginning, the code block will not be executed at all.
    // Make sure to update the condition inside the loop to avoid infinite loops. 
*/