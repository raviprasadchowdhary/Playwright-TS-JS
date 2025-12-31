var person = {
    firstName: "Raviprasad",
    lastName: "Chowdhary"
}

console.log(`Person object: ${JSON.stringify(person)}`)
console.log(`Full name: ${person.firstName} ${person.lastName}`)

person.age = 25
console.log(`Updated Person object: ${JSON.stringify(person)}`)
console.log(`Full name: ${person.firstName} ${person.lastName}`)
console.log(`Age: ${person.age}`)

person.firstName = "Rohan"
person['lastName'] = "Sharma"
console.log(`Updated Full name: ${person.firstName} ${person.lastName}`)

console.log(`accssing first element using bracket notation: ${person['firstName']}`)

// object with array
var employee = {
    firstname: "Amar",
    lastName: "Kumar",
    skills: ['javaScript', 'python', 'c++']
}

console.log(`Employee object: ${JSON.stringify(employee)}`)
console.log(`Employee Skills: ${employee.skills}`)
console.log(`First Skill: ${employee.skills[0]}`)
