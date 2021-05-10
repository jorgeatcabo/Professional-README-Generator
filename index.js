const generateMarkdown=require('./generateMarkdown.js')
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