const inquirer = require('inquirer');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const generateMarkdownPage = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {

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
            name: 'title',
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
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which licenses apply',
            choices: ['MIT', 'ISC']
        }
    ])
    // .then(answers => console.log(answers));
    // return generateMarkdown(data);
};
// questions().then(answers => console.log(answers));

// questions()


// function to write README file
const writeToFile = (fileName, data) => {

    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileName, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
// function to initialize program
function init() {
    questions()
        .then(generateMarkdown)
        .then(writeToFile)
        .catch(err => {
            console.log(err);
        });
}

// function call to initialize program
init();
