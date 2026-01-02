// Relational or Comparison Operators

// Examples of relational operators
// Greater than >
console.log(`is (5>3)? ` + (5>3))
console.log(`is (2>3)? ` + (2>3))
// Greater than or Equal to >=
console.log(`is (5>=5)? ` + (5>=5))
console.log(`is (5>=6)? ` + (5>=6))
// Less than <
console.log(`is (5<6)? ` + (5<6))
console.log(`is (6<5)? ` + (6<5))
// Less than or Equal to <=
console.log(`is (5<=5)? ` + (5<=5))
console.log(`is (6<=5)? ` + (6<=5))

// Equality Operators
// Equal to ==
console.log(`is (1==1)? ` + ((1==1)))
console.log(`is (1=='1')? ` + ((1=='1')))
console.log(`is (1==2)? ` + ((1==2)))
// Not Equal to !=
console.log(`is (1!=1)? ` + ((1!=1)))
console.log(`is (1!=2)? ` + ((1!=2)))
// Strict Equal to ===
console.log(`is (1===1)? ` + ((1===1)))
console.log(`is (1==='1')? ` + ((1==='1')))
// Strict Not Equal to !==
console.log(`is (1!=='1')? ` + ((1!=='1')))
console.log(`is (1!==1)? ` + ((1!==1)))

// Ternary Operator ? :
var agePerson1 = 20
var canVote = (agePerson1>=18)?'Yes':'No'
console.log(`A person with age:${agePerson1}canVote?: ${canVote}`)

var agePerson2 = 17
var canVote = (agePerson2>=18)?'Yes':'No'
console.log(`A person with age:${agePerson2}canVote?: ${canVote}`)