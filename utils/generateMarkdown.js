const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let logo; 
  switch (license) {
    case 'MIT':  logo = '![mit logo](./img/MIT-logo.jpg)';
      break;
    case 'Apache':  logo = '![Apache logo](./img/apache-logo.jpg)';
      break;
    case 'GPL':  logo = '![GPL logo](./img/gpl-logo.png)';
      break;
    default: logo = '';
  }
  if (logo !== ''){
  renderLicenseLink(license)
  }
  
  return logo
}

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
