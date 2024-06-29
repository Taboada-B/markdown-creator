// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const colors = require("colors");
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
        message: 'Description of the project',
    },


    {
        type: 'input',
        name: 'url',
        message: 'What is the deployed url?',
    }, 
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // }, 
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // }, 
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // }, 
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // }, 

];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            console.log(answers)
            if(answers.createReadme){
                const fileName = 'README.md';
    
                writeToFile(fileName, answers);
            }
            else{
                
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

