// Packages needed for this application
const inquirer = require("inquirer");
const { generateMarkdown, renderLicenseSection } = require("./utils/generateMarkdown");


// The first question to make sure the user wants to make a readme.md
const thequestion = [
    {
        type: 'confirm',
        name: 'createReadme',
        message: 'Are you creating a README.md?'
    }
]
// the questions that must be answered to create a readme.md
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

// Asks user if they want to make a readme.md
function readme() {
    inquirer
        .prompt(thequestion)
        // if the answer is yes, will continue with more questions
        .then((answer) => {
            if (answer.createReadme === true) {
                return init()
            }
            // no answer stops the program
            else {
                return console.log('This is to create a readme.md');
            }
        })
        .catch((error) => {
            return console.error('There was an error', error)
        })
}

function init() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            const fileName = 'README.md';
            writeToFile(fileName, answers);
        })
        .catch((error) => {
            console.error('There was an error', error);
        });
}

// Formats user input into a markdown text.
// Calls generateMarkdown to create the file
function writeToFile(fileName, answers) {

const licenseSection = renderLicenseSection(answers.license);

    const readme =
        `# ${answers.title}

## Description 
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [URL](#url)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Installation
${answers.install}

## Usage
${answers.usage}
![screenshot](${answers.screenshot})

## URL
${answers.url}

## Credits
${answers.credit}

${licenseSection}

## How to Contribute
${answers.contribute}
`
    return generateMarkdown(fileName, readme)
}

// Initilize first function
readme();
