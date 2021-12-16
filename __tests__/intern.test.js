const Employee = require('../lib/employee')
const Intern = require('../lib/intern')

//test the properties
test('all the properties for intern', () => {
    const intern = new Intern ('Mia', '7001', 'mia@id.com', 'UCF')
    expect(intern.name).toEqual('Mia')
    expect(intern.id).toEqual('7001')
    expect(intern.email).toEqual('mia@id.com')
    expect(intern.school).toEqual('UCF')
})

//test the get function
test('all the get methods of intern', () => {
    const intern = new Intern('Angie', '7002', 'angie@id.com', 'University of Miami')
    expect(intern.getName()).toEqual('Angie')
    expect(intern.getId()).toEqual('7002')
    expect(intern.getEmail()).toEqual('angie@id.com')
    expect(intern.getSchool()).toEqual('University of Miami')

})