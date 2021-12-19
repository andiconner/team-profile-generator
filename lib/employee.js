class Employee{
    //setting the data from the constructor input parameters
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    } 
    //creating functions to retrieve data
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }

}

module.exports = Employee