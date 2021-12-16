const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')

//test the properties
test('all the properties of engineer', () => {
    const engineer = new Engineer('Jeff', '7212', 'jeff@id.com', 'jeffb')
    expect(engineer.name).toEqual('Jeff')
    expect(engineer.id).toEqual('7212')
    expect(engineer.email).toEqual('jeff@id.com')
    expect(engineer.github).toEqual('jeffb')
})

// test the get functions
test('all the get methods of engineer', () => {
    const engineer = new Engineer('Jeff', '7212', 'jeff@id.com', 'jeffb')
    expect(engineer.getName()).toEqual('Jeff')
    expect(engineer.getId()).toEqual('7212')
    expect(engineer.getEmail()).toEqual('jeff@id.com')
    expect(engineer.getGithub()).toEqual('jeffb')
})