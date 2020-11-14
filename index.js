const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdownPage = require('./utils/generateMarkdown');

// array of questions for user
const questions = data => {
    // If there's no 'projects' array property, create one
  if (!data.questions) {
    data.questions = [];
  }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the link to your Github profile?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installation (Required)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide how to use it'
        }
        // {
        //     type: 'checkbox',
        //     name: 'license',
        //     message: 'Which licenses apply'
        //     choices: ['MIT', 'ISC']
        // },
    ])

};

questions()


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
