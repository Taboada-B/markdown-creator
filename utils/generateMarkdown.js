const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }
// if else statments

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(fileName, readme) {
  fs.writeFile(fileName, readme, (err) => {
    if (err) throw err;
    console.log(`Successfully written to ${fileName}`);
});  
}

module.exports = generateMarkdown;
