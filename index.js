const inquirer = require('inquirer');

inquirer
  .prompt([
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
  ])
  // .then((response) =>
  //   response.confirm === response.password
  //     ? console.log('Success!')
  //     : console.log('You forgot your password already?!')
  //);