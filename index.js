const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title?",
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('Please enter a title!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of the project?",
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                console.log('Please enter a description!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "contents",
            message: "Include a table of contents. (Optional)",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps for installation?",
            validate: installInput => {
                if (installInput) {
                return true;
                } else {
                console.log('Please enter steps for installation!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "What are the instuctions and examples for usage?",
            validate: useInput => {
                if (useInput) {
                return true;
                } else {
                console.log('Please enter instructions!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "credits",
            message: "Credit collaborators (if any)",
        },
        {
            type: "list",
            name: "license",
            message: "Chose a license.",
            choices: ['Apache', 'Boost', 'Faas', 'MIT', 'None'],
        },
        {
            type: "input",
            name: "features",
            message: "What are some of the features?",
            validate: testsInput => {
                if (testsInput) {
                return true;
                } else {
                console.log('Please enter features!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "What are the guidelines to contributing to the project?",
            validate: contributingInput => {
                if (contributingInput) {
                return true;
                } else {
                console.log('Please add guidelines for contibution!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "What are the tests for the project?",
            validate: testsInput => {
                if (testsInput) {
                return true;
                } else {
                console.log('Please enter tests!');
                return false;
                }
            }
        }, 
        {
            type: "input",
            name: "username",
            message: "What is your github username?",
            validate: testsInput => {
                if (testsInput) {
                return true;
                } else {
                console.log('Please enter your username!');
                return false;
                }
            }
        }, 
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: testsInput => {
                if (testsInput) {
                return true;
                } else {
                console.log('Please enter your email!');
                return false;
                }
            }
        }, 
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// const readmeString = generateMarkdown(data)
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md was created!")
    });
};

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();



