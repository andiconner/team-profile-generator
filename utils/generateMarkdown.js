
const role = ['Manager', 'Engineer', 'Intern']

function teamIcon(role) {
    if (!role) {
        return "";
    } else if (role == 'Manager') {
        return `<i class="fas fa-user-tie"></i>
    <h1>Manager</h1>`;
    } else if (role == 'Engineer') {
        return `<i class="fas fa-user-cog"></i>
    <h1>Engineer</h1>`;
    } else if (role == 'Intern') {
        return `<i class="fas fa-user-graduate"></i>
    <h1>Intern</h1>`
    }

};
function teamInfo(role, employee) {
    
    if (!role) {
        return "";
    } else if (role == 'Manager') {
        return `<li id="addInfo" class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
    } else if (role == 'Engineer') {
        return `<li id="addInfo" class="list-group-item">github: ${employee.github}</li>`;
    } else if (role == 'Intern') {
        return `<li id="addInfo" class="list-group-item">School: ${employee.school}</li>`
    }

};

function card(employee) {
    return `
    <div class="card col text-light p-3">
    <div class="card-block">
        <h4 class="card-title">
        ${teamIcon(employee.getRole())}</br>
        ${employee.name}
        </h4>
    </div>
    <div class="card-body">
        <ul class="list-group ">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: ${employee.email}</li>
          ${teamInfo(employee.getRole(), employee)}
        </ul>
    </div>
</div>   
    `
}
//function to generate markdown for index.html
function generateMarkdown(team) {
    let cards = ''
    for (let i = 0; i < team.length; i++) {
        cards = cards + card(team[i])

    }
    return `

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">

    <title>Team Profile Generator</title>
</head>

<body>

    <div class="container-fluid header p-5">
        <div class="row m-1">
            <header class="col text-center">
                <i class="fas fa-users"></i>
                <h1> My Team</h1>
            </header>
        </div>
    </div>

    <!-- team info cards -->
    <div class="container my-5">
        <div class="row ">
            <div id="card-deck" class="card-deck">
                <!-- Individual card -->
               ${cards}
            </div>
        </div>
    </div>


</body>

</html>


    `;
}




module.exports = generateMarkdown;