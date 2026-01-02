// conditional statements examples

// Example 1: if statement
// Check if a number is positive
let number = 10
if(number>0){
    console.log(`${number} is a positive number`)
}
// Example 2: if-else statement
// Check if a number is even or odd
let num1 = 8
if(num1%2===0){
    console.log(`${num1} is an even`)
}else{
    console.log(`${num1} is an odd number`)
}

// Example 3: if-else if-else statement
// Check the grade based on score
let score = 88
if(score>=90){
    console.log(`Grade for score ${score} is S`)
} else if(score>=80){
    console.log(`Grade for score ${score} is A`)
} else if(score>=70){
    console.log(`Grade for score ${score} is B`)
} else if(score>=55){
    console.log(`Grade for score ${score} is C`)
} else if(score>=40){
    console.log(`Grade for score ${score} is D`)
} else{
    console.log(`Grade for score ${score} is F`)
}

// Example 4: switch statement
// Check the day of the week
let day = 5
switch(day){
    case 1:
        console.log(`for day ${day}, it's Monday`)
        break
    case 2:
        console.log(`for day ${day}, it's Tuesday`)
        break
    case 3:
        console.log(`for day ${day}, it's Wednesday`)
        break
    case 4:
        console.log(`for day ${day}, it's Thursday`)
        break
    case 5:
        console.log(`for day ${day}, it's Friday`)
        break
    case 6:
        console.log(`for day ${day}, it's Saturday`)
        break
    case 7:
        console.log(`for day ${day}, it's Sunday`)
        break
    default:
        console.log(`Invalid day value: ${day}`)
}
