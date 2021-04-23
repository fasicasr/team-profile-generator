// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const Choices = require('inquirer/lib/objects/choices');
//const { title } = require('node:process');


// TODO: Create a function to initialize app
function init() {
    // An array of questions for user input
    inquirer.prompt ([
        {
        type:'input',
        message: 'What is the project title?',
        name: 'title',
        },
        {
            type:'input',
            message: 'Please enter the discription for your project',
            name: 'discription',
        },
        {
            type:'input',
            message: 'Please enter installation instructions',
            name: 'installation',
        },
        {
            type:'input',
            message: 'Please enter usage information for your project',
            name: 'usage',
        },
        {
            type:'input',
            message: 'Please enter the contribution guidelines for your project',
            name: 'contribution',
        },
        {
            type:'input',
            message: 'Please enter the test instructions for your project',
            name: 'tests',
        },
        {
            type:'list',
            message: 'Please choose the license for your project',
            name: 'license',
            choices: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)']
        },
        {
            type:'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type:'input',
            message: 'What is your email?',
            name: 'email',
        }, //Use of arrow function - Used data to concatenate the users response with the section headers. Used string to add github link and concatnated users github name to the link. 
    ]).then(response => {
        const fileName = 'sampleREADME.md';
        var data = '# ' + response.title + '\n' + response.license+ '\n';
        data = data + '\n## Discription\n' + response.discription + '\n';
        data = data + '\n## Table of Contents\n' + '-[Discriptions](#discription)' + '\n' + '-[Installation](#installation)' + '\n' + '-[Usage](#usage)' + '\n'+ '-[Test](#tests)' + '\n'  + '-[contribution](#Contribution)' + '\n'  + '-[License](#license)' + '\n';
        data = data + '\n## Installation\n' + response.installation + '\n';
        data = data + '\n## Usage\n' + response.usage + '\n';
        data = data + '\n## Contribution\n' + response.contribution + '\n';
        data = data + '\n## Tests\n' + response.test + '\n';
        data = data + '\n## License\n' + 'Click on badge below to learn more about the license: \n' + response.license+ '\n';
        data = data + '\n## Question\n' + 'Github:' + 'https://github.com/' + response.username+ '\n' + 'If you have any additional questions, please contact me at' + response.email+ '\n';
    
        

        writeToFile(fileName, data)
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => 
        err ? console.log(err) : console.log('Generating ReadMe!'));
    
}



// Function call to initialize app
init();


