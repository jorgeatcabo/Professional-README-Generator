const generateMarkdown=require('./generateMarkdown.js')

//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
//[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)  
//https://github.com/Naereen/badges
//https://github.com/badges


//link
//[Github](https://www.google.com)

const fs = require('fs');
const inquirer = require('inquirer');

const questions = [    
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'projectInstallation',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'projectUsage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'projectContribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'projectTest',
    },
    {
      type: 'input',
      message: 'Github?',
      name: 'projectGithub',
    },
    {
      type: 'input',
      message: 'Email?',
      name: 'projectEmail',
    },
    {
      type: 'checkbox',
      message: 'License:',
      name: 'projectLicense',
      choices: ['MIT', 'Apache 2.0', 'GNU GPL v3'],
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created README.md!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const READMEContent = generateMarkdown.generateMarkdown(answers);
    writeToFile('README.md', READMEContent)
  });
}


// Function call to initialize app
init();

/*
******** Table of contents *********
*/

// `##### Table of Contents\r  
// [Title](#Title)  
// [Description](#Description)  
// [Installation](#Installation)  
// [Usage](#Usage)  
// [Contribution](#Contribution)  
// [Test](#Test)  
// [Gihub](#Gihub)  
// [Email](#Email)    
// [License](#License)    
// # Title
// ${data.projectTitle}

// # Description
// ${data.projectDescription}

// # Installation
// ${data.projectInstallation}

// # Usage
// ${data.projectUsage}

// # Contribution
// ${data.projectContribution}

// # Test
// ${data.projectTest}

// # Gihub
// ${data.projectGithub}

// # Email
// ${data.projectEmail}

// # License
// ${data.projectLicense}`

