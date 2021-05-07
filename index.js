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
      choices: ['MIT', 'CSS', 'JavaScript', 'MySQL'],
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, 
`# ${data.projectTitle}\n
# Project Description\n
${data.projectDescription}\n
# Project Installation\n
${data.projectInstallation}\n
# Project Usage\n
${data.projectUsage}\n
# Project Contribution\n
${data.projectContribution}\n
# Project Test\n
${data.projectTest}\n
# Project Gihub\n
${data.projectGithub}\n
# Project Email\n
${data.projectEmail}\n
# Project License\n
${data.projectLicense}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log( `File ${fileName} created!`)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>{
    writeToFile(`${process.argv[2]}`,response)    
  }
  );
}


// Function call to initialize app
init();

/*
******** Table of contents *********
*/



