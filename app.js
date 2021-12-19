//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

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
            message: 'What is the team Manager id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team Manager email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team Manager office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager office number!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'addTeamMember',
            message: 'What type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I dont want to add any more team members"],
            
        },

    ])  
}

// create a function to add team members
const promptEngineer = engineerData => {
    inquirer.prompt([
        {

        }
    ])
}

promptManager()
