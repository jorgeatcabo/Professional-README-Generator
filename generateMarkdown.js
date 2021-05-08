// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge=""
  switch(data.projectLicense){
    case "MIT":
      badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      break;

    case "Apache 2.0":
      badge="[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;

    case "GNU GPL v3":
      badge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;

    default:
      break;
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
licenseBadge=renderLicenseBadge(data.projectLicense)
return `
${licenseBadge}

##### Table of Contents
  
[Title](#Title)  
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[Contribution](#Contribution)  
[Test](#Test)  
[Gihub](#Gihub)  
[Email](#Email)    
[License](#License)    
# Title
${data.projectTitle}

# Description
${data.projectDescription}

# Installation
${answers.projectInstallation}

# Usage
${answers.projectUsage}

# Contribution
${answers.projectContribution}

# Test
${answers.projectTest}

# Gihub
${answers.projectGithub}

# Email
${answers.projectEmail}

# License
${answers.projectLicense}
`
;
}

module.exports = generateMarkdown;