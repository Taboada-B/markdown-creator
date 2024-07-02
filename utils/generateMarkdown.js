const fs = require('fs');

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
     return ''};
  
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  // constructing the license section
  return `
## License

${badge}

This project is licensed under the ${license} 
- see the following link for details: ${link}`;
}

// returns a license badge based on which license is passed in
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
  return logo
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let link;
  switch (license) {
    case 'MIT':
      link = '[MIT License](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      link = '[Apache License](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL':
      link = '[GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html)';
      break;
    default:
      link = '';
  }
  return link;
}

// function generates markdown file for README
function generateMarkdown(fileName, readme) {
  fs.writeFile(fileName, readme, (err) => {
    if (err) throw err;
    console.log(`Successfully written to ${fileName}`);
  });
}


module.exports = { 
  generateMarkdown, 
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection 
};

