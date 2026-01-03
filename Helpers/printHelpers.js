export function printAge(age){
    console.log(`Age is: ${age}`)
}

class EmployeeDetails{

    // function to print employee details

    // method to print employee age
    /**
     * This method prints the age of the employee
     * @param {integer} age 
     */ 
    printAge(age){
        console.log(`Employee age is: ${age}`)
    }

    // method to print employee name
    /**
     * This method prints the name of the employee
     * @param {String} firstName 
     * @param {String} lastName 
     */
    printName(firstName, lastName){
        console.log(`Employee name is: ${firstName} ${lastName}`)
    }
}

export const employeeDetails = new EmployeeDetails()