// while loop
/*
    while (condition) {
    // code block to be executed
    }
    // The code block inside the loop will be executed as long as the condition is true.
    // If the condition is false at the beginning, the code block will not be executed at all.
    // Make sure to update the condition inside the loop to avoid infinite loops. 
*/

console.log(`Example 1: Print numbers from 0 to 4`)
let count = 0
while(count<5){
    console.log(count)
    count++
}

console.log(`Example 2: Print even numbers from 0 to 10`)
let evenNum=0
while(evenNum<=10){
    console.log(evenNum)
    evenNum+=2
}

console.log(`Example 3: Sum of first 5 natural numbers`)
let i=1
let sum=0
let n=5
while(i<=n){
    sum+=i
    i++
}
console.log(`Sum of first ${n} natural numbers is ${sum}`)

console.log(`Example 4: Print numbers from 10 to 1 in descending order`)
n=10
while(n>=1){
    console.log(n)
    n--
}

console.log(`Example 5: Print multiples of 3 less than 20`)
let multiples=0
i=1
while(multiples<20){
    multiples=i*3
    if(!(multiples < 20)){
        break
    }
    console.log(multiples)
    i++
}

console.log(`Example 6: Find the first number greater than 50 that is divisible by 7`)
let example6_n = 50
let example6_i = example6_n+1

while(true){
    if(example6_i%7===0){
        console.log(`The first number greater than ${example6_n} that is divisible by 7 is ${example6_i}`)
        break
    }
    example6_i++
}
