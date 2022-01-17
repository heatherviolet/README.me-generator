const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache') {
    return  '[![[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'boost' ) {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
  } else if (license === 'faas') {
    return '[![OpenFaaS](https://img.shields.io/badge/openfaas-cloud-blue.svg]'
  } else if (license === 'MIT') {
    return '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'None') {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return ('https://opensource.org/licenses/Apache-2.0')
  } else if (license === 'boost') {
    return ('https://www.boost.org/LICENSE_1_0.txt')
  } else if (license === 'faas') {
    return ('https://www.openfaas.com')
  } else if (license === 'MIT') {
    return ('https://opensource.org/licenses/MIT')
  } else if (license === 'None') {
  return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ""; 
  }
  return `
  Licensed under ${license} license.`;
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
   
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Badges
  ${data.license} 
  ## Features
  ${data.features}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions?
  ### [Github](https://github.com/${data.username})
  ### [Email](${data.email})
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
