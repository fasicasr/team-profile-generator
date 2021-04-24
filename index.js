// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const Manager = require("../lib/manager");


// TODO: Create a function to initialize app
function init() {
    // An array of questions for user input
    inquirer.prompt ([
        {
            type:'input',
            message: 'What is the team managers name?',
            name: 'name',
        },
        {
            type:'input',
            message: 'What is your employee ID numer?',
            name: 'id',
        },
        {
            type:'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type:'input',
            message: 'What is your office number?',
            name: 'officenumber',
        },
        {
            type:'list',
            message: 'Select team members to add or finish',
            name: 'members',
            choices: ['Engineer', 'Intern', 'finish'],
        },
    ]).then(response => { 
        //passed all the information above to the html manger section
       //var data = [response.name, response.id, response.email, response.officenumber]
       //const obj = new Manager(response.name, response.id, response.email, response.officenumber);
        //writeToHtml('manager', data) //take data to push to html file
        if (response.members ==='Engineer') {
            init_engineer()
        } else if (response.members ==='Intern') {
            init_intern()
        } else {
            const finish = 'sample.html';  
        }
    
        

        //writeToFile(fileName, data)
    });
}//closed init()
function init_engineer() {
    // An array of questions for user input
    inquirer.prompt ([
        {
            type:'input',
            message: 'What is the engineer name?',
            name: 'name',
        },
        {
            type:'input',
            message: 'What is the engineer\'s employee ID numer?',
            name: 'id',
        },
        {
            type:'input',
            message: 'Please enter the engineer\'s email?',
            name: 'email',
        },
        {
            type:'input',
            message: 'What is the engineer\'s Github username?',
            name: 'github',
        },
        {
            type:'list',
            message: 'Select team members to add or finish',
            name: 'members',
            choices: ['Engineer', 'Intern', 'finish'],
        },
    ]).then(response => { 
         //passed all the information above to the html engineer section
        var data = [response.name, response.id, response.email, response.github]
        writeToHtml('engineer', data)
        if (response.members ==='Engineer') {
            init_engineer()
        } else if (response.members ==='Intern') {
            init_intern()
        } else {
         console.log('finish');  
        }
    
        

        //writeToFile(fileName, data)
    });
}//closed init_engineer()
function init_intern() {
    // An array of questions for user input
    inquirer.prompt ([
        {
            type:'input',
            message: 'What is the inern\'s name?',
            name: 'name',
        },
        {
            type:'input',
            message: 'What is the intern\'s ID?',
            name: 'id',
        },
    
        {
            type:'input',
            message: 'What is the intern\'s email?',
            name: 'email',
        },
        {
            type:'input',
            message: 'What school did the intern go to?',
            name: 'school',
        },
        {
            type:'list',
            message: 'Select team members to add or finish',
            name: 'members',
            choices: ['Engineer', 'Intern', 'finish'],
        },
    ]).then(response => { 
         //passed all the information above to the html intern section
         var data = [response.name, response.id, response.email, response.school]
         writeToHtml('intern', data)
        if (response.members ==='Engineer') {
            init_engineer()
        } else if (response.members ==='Intern') {
            init_intern()
        } else { 
            console.log('finished!')
        }
    
    
    });
}//closed init_intern()


// Create a function to write html files
function writeToHtml(htmlName, data) {
   if (htmlName === 'manager') {
   //write the data to the manager html page
   data[0]//using index to to pull properties of name, id etc
   data[1]
   }else if (htmlName === 'engineer'){
     //write the data to the engineer html page  
   }else if (htmlName === 'intern'){
    //write the data to the intern html page  
   }
    
}



// Function call to initialize app
init();




    // {
        //     type:'input',
        //     message: 'What is your Github username?',
        //     name: 'github',
        // },
        // {
        //     type:'input',
        //     message: 'What school did you go to?',
        //     name: 'school',
        // },
       
        //Use of arrow function - Used data to concatenate the users response with the section headers. Used string to add github link and concatnated users github name to the link. 
    // ]).then(response => {
    //     const fileName = 'sample.html';
    //     var data = '# ' + response.title + '\n' + response.license+ '\n';
    //     data = data + '\n## Discription\n' + response.discription + '\n';
    //     data = data + '\n## Table of Contents\n' + '-[Discriptions](#discription)' + '\n' + '-[Installation](#installation)' + '\n' + '-[Usage](#usage)' + '\n'+ '-[Test](#tests)' + '\n'  + '-[contribution](#Contribution)' + '\n'  + '-[License](#license)' + '\n';
    //     data = data + '\n## Installation\n' + response.installation + '\n';
    //     data = data + '\n## Usage\n' + response.usage + '\n';
    //     data = data + '\n## Contribution\n' + response.contribution + '\n';
    //     data = data + '\n## Tests\n' + response.test + '\n';
    //     data = data + '\n## License\n' + 'Click on badge below to learn more about the license: \n' + response.license+ '\n';
    //     data = data + '\n## Question\n' + 'Github:' + 'https://github.com/' + response.username+ '\n' + 'If you have any additional questions, please contact me at' + response.email+ '\n';
    
