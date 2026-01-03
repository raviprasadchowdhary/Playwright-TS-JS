// importing function from another file
// file path is relative to current file

// importing printAge function from printHelpers.js
import { printAge } from '../../Helpers/printHelpers.js'
printAge(25)

// import everything from a module
import * as printHelpers from '../../Helpers/printHelpers.js'
printHelpers.printAge(22)

