// Write your solution in this file!
 const employee = {
    name:"Brian",
    streetAddress:"Kawangware",
 }

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee ={...employee};
    newEmployee.name ="Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeClone = {...employee};
    delete employeeClone.name;
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
