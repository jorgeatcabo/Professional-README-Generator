// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  badge=""
  switch(license){
    case "MIT":
      badge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
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
function renderLicenseLink(license) {
  link=""
  switch(license){
    case "MIT":
      link="[License: MIT](https://opensource.org/licenses/MIT)"
      break;

    case "Apache 2.0":
      link="[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)"
      break;

    case "GNU GPL v3":
      link="[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
      break;

    default:
      break;
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseSection=[]
  licenseBadge=renderLicenseBadge(license)
  licenseLink=renderLicenseLink(license)
  return licenseSection=[licenseBadge,licenseLink]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const [license]=data.projectLicense
const [licenseBadge, licenseLink]=renderLicenseSection(license)
return `
${licenseBadge}

${licenseLink}

## Table of Contents
  
[Title](#Title)  
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[Contribution](#Contribution)  
[Test](#Test)  
[Gihub](#Gihub)  
[Questions](#Questions)    
[License](#License)    
# Title
${data.projectTitle}

# Description
${data.projectDescription}

# Installation
${data.projectInstallation}

# Usage
${data.projectUsage}

# Contribution
${data.projectContribution}

# Test
${data.projectTest}

# Questions
${data.projectGithub}\n
${data.projectEmail}

# License
${data.projectLicense}
`
;
}

exports.generateMarkdown = generateMarkdown;