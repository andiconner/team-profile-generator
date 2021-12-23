//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const team = [] //array will store the classes

// questions for user input to build my team

const promptManager = () => {
    console.log(`
=====================
Lets build your team!
=====================
`);

    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is the team Manager name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Manager id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Manager email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter Managers email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is the Manager office number? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter Managers office number!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to enter another Team Member?',
            default: true
        },

    ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.info)
            team.push(manager)
            if (data.confirmAddMember) {
                promptEmployee()
            } else {
                createTeamHTML()
            }


        });

}
function createTeamHTML() {
    const pageHTML = generatePage(team)
    fs.writeFileSync('./dist/index.html', pageHTML);
}
const promptEmployee = myTeamData => {

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of team member would you like to add?',
            choices: ["Engineer", "Intern"],
        },


    ])
        .then(employeeData => {
            if (employeeData.role === "Engineer") {
                addEngineer()
            } else {
                addIntern()
            }
        });

}
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your team Intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Intern id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the intern id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter intern email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is your school name? (Required)',
            validate: infoInput => {
                if (infoInput) {
                    return true;
                } else {
                    console.log('Please enter your school name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another Team Member?',
            default: false
        }])
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.info)
            team.push(intern)
            if (internData.confirmAddEmployee) {
                promptEmployee()
            } else {
                createTeamHTML()
            }
        })

}
function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the Engineer name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your team Engineer name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineer id? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the engineer id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Engineer email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter Engineer email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'info',
        message: 'What is your github username? (Required)',
        validate: infoInput => {
            if (infoInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another Team Member?',
        default: false
    }])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.info)
            team.push(engineer)
            if (engineerData.confirmAddEmployee) {
                promptEmployee()
            } else {
                createTeamHTML()
            }
        })
}

promptManager()
