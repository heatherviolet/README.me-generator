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
                console.log('Please enter a titile!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "desciption",
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
            message: "Include a table of contents.",
            validate: contentsInput => {
                if (contentsInput) {
                return true;
                } else {
                console.log('Please enter table of contents!');
                return false;
                }
            }
        },
        {
            type: "input",
            name: "install",
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
            name: "use",
            message: "What are the instuctions and examples for use?",
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
            name: "license",
            message: "What is the license information?",
            validate: licenseInput => {
                if (licenseInput) {
                return true;
                } else {
                console.log('Please enter license information!');
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
            name: "questions",
            message: "What questions would you like to include?",
            validate: questionsInput => {
                if (questionsInput) {
                return true;
                } else {
                console.log('Please enter questionsls!');
                return false;
                }
            }
        },
    ]

console.log(questions);
const userInput = () => {
    return inquirer
        .prompt(questions)
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    });
};

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", (userInput));
    });
};

// Function call to initialize app
init();
