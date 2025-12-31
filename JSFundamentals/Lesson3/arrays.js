var car = ["BMW", "Audi", "Mercedes"]
console.log(`First car: ${car[0]}`)
console.log(`Second car: ${car[1]}`)
console.log(`Third car: ${car[2]}`)

car[1] = "Toyota"
console.log("After modification:")
console.log(`First car: ${car[0]}`)
console.log(`Second car: ${car[1]}`)
console.log(`Third car: ${car[2]}`)

car.push("Honda")
console.log("After adding a new car:")
console.log(`First car: ${car[0]}`)
console.log(`Second car: ${car[1]}`)
console.log(`Third car: ${car[2]}`)
console.log(`Fourth car: ${car[3]}`)

car.pop()
console.log("After removing the last car:")
console.log(`First car: ${car[0]}`)
console.log(`Second car: ${car[1]}`)
console.log(`Third car: ${car[2]}`)
console.log(`Total cars: ${car.length}`)

car[3] = "Ford"
console.log("After adding a new car at index 3:")
console.log(`First car: ${car[0]}`)
console.log(`Second car: ${car[1]}`)
console.log(`Third car: ${car[2]}`)
console.log(`Fourth car: ${car[3]}`)
console.log(`Total cars: ${car.length}`)