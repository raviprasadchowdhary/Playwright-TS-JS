// logical operators in JavaScript

// "AND" operator &&
console.log(`Is (5>3 && 2<4)?: ${(5>3 && 2<4)}`)    //all the conditions should be true
console.log(`Is (5>6 && 2>1)?: ${(5>6 && 2>1)}`)

// "OR" operator ||
console.log(`Is (5>3 || 2>3)?: ${(5>3 || 2>3)}`)    //any one condition should be true
console.log(`Is (5>9 || 2>3)?: ${(5>9 || 2>3)}`)

// "NOT" operator !
console.log(`Is !(5>3)?: ${!(5>3)}`)    //negates the condition
console.log(`Is !(2>5)?: ${!(2>5)}`)

// Example usage
var isAgeGreaterThan18 = false
var isCitizen = true
var canVote = isAgeGreaterThan18 && isCitizen
console.log(`Can the person vote?: ${canVote}`)

// Example usage with OR operator
var hasDriversLicense = false
var hasLearnersPermit = true
var canDrive = hasDriversLicense || hasLearnersPermit
console.log(`Can the person drive?: ${canDrive}`)

// Example usage with NOT operator
var isRaining = false
var willGoOutside = !isRaining
console.log(`Will the person go outside?: ${willGoOutside}`)

// Combining logical operators
var isWeekend = true
var isHoliday = false
var isRaining = false
var willRelax = (isWeekend || isHoliday) && !isRaining
console.log(`Will the person relax?: ${willRelax}`)

