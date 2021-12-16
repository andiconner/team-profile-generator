const Employee = require('../lib/employee')

//test the properties
test('all the properties of employee', () => {
    const employee = new Employee('Mario', '7342', 'mario@id.com')
    expect(employee.name).toEqual('Mario')
    expect(employee.id).toEqual('7342')
    expect(employee.email).toEqual('mario@id.com')
})
//test the functions
test('all the get methods of employee', () => {
    const employee = new Employee('John', '7337', 'john@id.com')
    expect(employee.getName()).toEqual('John')
    expect(employee.getId()).toEqual('7337')
    expect(employee.getEmail()).toEqual('john@id.com')
    
})