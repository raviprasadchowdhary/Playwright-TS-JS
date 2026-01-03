// functions

// declarative function: these functions can be invoked before they are defined, means hoisting is applicable
// hello() // this will work because of hoisting
function hello(){
    console.log(`hello world!`)
}
// invoke function
hello()

// expression function OR anonymous function: these functions can't be invoked before they are defined, means hoisting is not applicable
// hello2() // this will give error because hoisting is not applicable
var hello2 = function(){
    console.log(`Hello world 2!`)
}
// invoke function
hello2()

// ES6 arrow function: these functions also can't be invoked before they are defined, means hoisting is not applicable
// hello3() // this will give error because hoisting is not applicable
var hello3 = () => {
    console.log(`Hello world 3!`)
}
// invoke function
hello3()

// function with parameters: functions can take parameters as input
function greet(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}!`)
}
// invoke function with arguments
greet('Raviprasad', 'Chowdhary')

// function with return value: functions can return values using return statement
var add = (a, b) => {
    return a+b
}
// invoke function and store return value
a=5; b=6
console.log(`The sum of ${a} and ${b} is ${add(a, b)}`)