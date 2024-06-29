// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'confirm',
        name: 'createReadme',
        message: 'Are you creating a README.md?'
    },
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
        name: 'installation',
        message: 'What steps are required to install your project?',
    },

    {
        type: 'input',
        name: 'usage',
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
        message:'What license are you using, or none?',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'How can other developers contribute? ',
    }, 

];

// TODO: Create a function to initialize app
function init() {
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

            // writeToFile(fileName, answers);
        })
        .catch((error) => {
            console.error('There was an error', error);

        });

}


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    console.log(fileName, data)
    console.log('did I make it here?')
    const readme =
        `# ${data.title}
  ## Description
   ${data.description}
  ## URL
  ${data.url}
  
  `

    fs.writeFile(fileName, readme, (err) => {
        if (err) throw err;
        console.log(`Successfully written to ${fileName}`);
    });
}



// Function call to initialize app
init();

