// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
let teamMember = [];

// TODO: Create a function to initialize app
function init() {
    // An array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID numer?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officenumber',
        },
        {
            type: 'list',
            message: 'Select team members to add or finish',
            name: 'members',
            choices: ['Engineer', 'Intern', 'finish'],
        },
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officenumber)
        teamMember.push(manager)
        if (response.members === 'Engineer') {
            init_engineer()
        } else if (response.members === 'Intern') {
            init_intern()
        } else {
            console.log('finish');
            writeToFile()
        }



    });

}


function init_engineer() {
    // An array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s employee ID numer?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter the engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s Github username?',
            name: 'github',
        },
        {
            type: 'list',
            message: 'Select team members to add or finish',
            name: 'members',
            choices: ['Engineer', 'Intern', 'finish'],
        },
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        teamMember.push(engineer)
        if (response.members === 'Engineer') {
            init_engineer()
        } else if (response.members === 'Intern') {
            init_intern()
        } else {
            console.log('finish');
            writeToFile()
        }


    });
}//closed init_engineer()
function init_intern() {
    // An array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the inern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the intern\'s ID?',
            name: 'id',
        },

        {
            type: 'input',
            message: 'What is the intern\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school did the intern go to?',
            name: 'school',
        },
        {
            type: 'list',
            message: 'Select team members to add or finish',
            name: 'members',
            choices: ['Engineer', 'Intern', 'finish'],
        },
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        teamMember.push(intern)
        if (response.members === 'Engineer') {
            init_engineer()
        } else if (response.members === 'Intern') {
            init_intern()
        } else {
            console.log('finish');
            writeToFile()
        }


    });
}//closed init_intern()

// TODO: Create a function to write README file
function writeToFile() {
    fileName = 'dist/sample.html'
    let data1 =
        `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
           <title>Team Members</title>
       </head>
       <body>
           <div class="jumbotron jumbotron-fluid">
               <div class="container">
               <h1 class="display-6">My Team</h1>
               <p class="lead">Look before for contact information</p>
               </div>
           </div>`
    let data2 = ''
    let askQuestion = ''
    for (i = 0; i < teamMember.length; i++) { 
            if (teamMember[i] instanceof Manager) {
                askQuestion = 
                    `<div class="card text-black bg-info mb-3" style="width: 18rem;">
                    <div class="card-header">
                        Name:${teamMember[i].name} Manager
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMember[i].id}</li>
                    <li class="list-group-item">Email:${teamMember[i].email}</li>
                    <li class="list-group-item">Office Number: ${teamMember[i].officenumber}</li>
                    </ul>
                </div>`
            } else if (teamMember[i] instanceof Engineer) {
                askQuestion = 
                `<div class="card text-black bg-info mb-3" style="width: 18rem;">
                    <div class="card-header">
                        Name:${teamMember[i].name} Engineer
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMember[i].id}</li>
                    <li class="list-group-item">Email:${teamMember[i].email}</li>
                    <li class="list-group-item">Github: ${teamMember[i].github}</li>
                </ul>
                </div>`
            } else if (teamMember[i] instanceof Intern) {
                askQuestion = 
                `<div class="card text-black bg-info mb-3" style="width: 18rem;">
                    <div class="card-header">
                        Name:${teamMember[i].name} Intern
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMember[i].id}</li>
                    <li class="list-group-item">Email:${teamMember[i].email}</li>
                    <li class="list-group-item">School: ${teamMember[i].school}</li>
                </ul>
                </div>`
            }
            data2 = data2+askQuestion

    }

    let data3 =
        `</body>
       </html>`;
    data = data1 + data2 + data3
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Generating!'));
}
init();

