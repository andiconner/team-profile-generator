const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        // brings the employee into the manager constructor
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager