const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

//test the properties
test('all the properties of manager', () => {
    const manager = new Manager('Josh', '7101', 'josh@id.com', '2')
    expect(manager.name).toEqual('Josh')
    expect(manager.id).toEqual('7101')
    expect(manager.email).toEqual('josh@id.com')
    expect(manager.officeNumber).toEqual('2')
})
//test the functions
test('all the get methods of manager', () => {
    const manager = new Manager('Josh', '7101', 'josh@id.com', '2')
    expect(manager.getName()).toEqual('Josh')
    expect(manager.getId()).toEqual('7101')
    expect(manager.getEmail()).toEqual('josh@id.com')
    expect(manager.getOfficeNumber()).toEqual('2')
})