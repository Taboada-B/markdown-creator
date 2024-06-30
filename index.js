// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const fs = require('fs');

// TODO: Create an array of questions for user input
const thequestion = [
    {
        type:'confirm',
        name: 'createReadme',
        message: 'Are you creating a README.md?'
    }
]
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project. Include motivations, why was this built, what problm was solved, and what did you learn ',
    },

    {
        type: 'input',
        name: 'install',
        message: 'What steps are required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use'
    },

    {
        type: 'input',
        name: 'screenshot',
        message: 'add path to screenshot. ex: ./assets/images/screenshot.png',
    },

    {
        type: 'input',
        name: 'url',
        message: 'What is the deployed url?',
    },

    {
        type: 'input',
        name: 'credit',
        message: 'List collaborators with links to their github profiles',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license are you using, or none?',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'How can other developers contribute? ',
    },

];

// creates the prompts to the user. 
function readme(){
    console.log('am I here?')
    inquirer
    .prompt(thequestion)

    .then((answer) => {
        if (answer.createReadme === true){
            console.log('here 1')
            return init()
        }
        else{
            console.log('here 2')
            return console.log('This is to create a readme.md');
        }
    })

    .catch((error) =>{
        return console.error('There was an error', error)
    })
}


function init() {
    console.log('here 3')
    inquirer
        .prompt(questions)

        .then((answers) => {
            console.log(answers)
            if (answers.createReadme) {
                const fileName = 'README.md';
                writeToFile(fileName, answers);
            }
            else {
                return console.log('This application is to create a readme.');
            }
        })
        .catch((error) => {
            console.error('There was an error', error);
        });
}

// Formats user input into a markdown text.
// Calls generateMarkdown to create the file
function writeToFile(fileName, answers) {
    const readme =
        `# ${answers.title}
## Description 
${answers.description}
 ## Table of Contents
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [URL](#URL)
 - [Credits](#Credits)
 - [License](#License)
 - [How to Contribute](#HowtoContribute)
## Installation
${answers.install}
## Usage
${answers.usage}
![screenshot](${answers.screenshot})
## URL
${answers.url}
## Credits
${answers.credit}
## License
${answers.license}
## How to Contribute
${answers.contribute}
`
 return generateMarkdown(fileName, readme)
}

// Function call to initialize app
readme();
