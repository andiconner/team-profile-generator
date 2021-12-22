const myTeam = () => {
    console.log(`
=====================
Lets build your team!
=====================
`);

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of team member would you like to add?',
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the team Employee name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your team name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team Employee id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your team id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team Employee email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your team Employee email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'additionalInfo',
            message: 'Choose an option for additional employee information',
            choices: ["Office Number", "github", "School"],

        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to enter another Team Member?',
            default: true
        },

    ])
        // function to write the HTML file
        .then(data => {
            const pageHTML = generatePage(data)
            fs.writeFileSync('./dist/index.html', pageHTML);
            if (data.confirmAddMember) {
                return myTeam();
            } else {
                return data;
                
            }
            
        });
        
}


myTeam()


.then(promptEmployee)
.then(myTeamData => {
    return generatePage(myTeamData)
})