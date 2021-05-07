const fs = require('fs');

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
  .then((response) =>{
    fs.truncate(`${process.argv[2]}`, 0, function() {
      //console.log('File Content Deleted')
    } );
    fs.appendFile(`${process.argv[2]}`, `#${response.projectTitle}
    ${response.projectDescription}\n
    ${response.projectInstallation}\n
    ${response.projectUsage}\n
    ${response.projectContribution}\n
    ${response.projectTest}\n`, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log( `File ${process.argv[2]} created!`)
    );
  }
  );
